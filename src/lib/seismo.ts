/**
 * Seismogram geometry.
 *
 * A drum trace is background noise under an envelope. An event adds a small
 * P arrival, a larger S arrival a moment later, and a coda that decays
 * exponentially back into the noise floor.
 *
 * Every trace on this site is generated here from a seed, so the same section
 * draws the same line on every render and on every machine. Amplitudes are
 * texture, never a measurement of anything about the work.
 */

export type SeismicEvent = {
  /** Onset of the P arrival, 0..1 across the width. */
  at: number;
  /** Peak amplitude of the S arrival, 0..1 of the half-height. */
  magnitude: number;
  /** Coda length as a fraction of the width. Larger decays slower. */
  decay?: number;
};

export type TraceOptions = {
  width: number;
  height: number;
  seed: number;
  samples?: number;
  /** Noise floor amplitude, 0..1 of the half-height. */
  floor?: number;
  events?: SeismicEvent[];
};

/** Small, fast, deterministic PRNG (mulberry32). */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Turn an arbitrary string into a stable seed. */
export function seedFrom(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Amplitude envelope contributed by one event at position `x` (0..1).
 * Sharp attack at the arrival, exponential decay after it.
 */
function envelope(x: number, event: SeismicEvent): number {
  const { at, magnitude, decay = 0.16 } = event;
  if (x < at - 0.012) return 0;

  // P arrival: a short, low-amplitude precursor.
  const pLead = 0.045;
  if (x < at + pLead) {
    const t = (x - (at - 0.012)) / (pLead + 0.012);
    return magnitude * 0.26 * Math.sin(t * Math.PI);
  }

  // S arrival and coda.
  const t = (x - (at + pLead)) / decay;
  const attack = Math.min(1, t / 0.08);
  return magnitude * attack * Math.exp(-t * 1.9);
}

/**
 * Build an SVG path for a seismogram. Returns a `d` string in the given box,
 * baseline-centred vertically.
 */
export function tracePath({
  width,
  height,
  seed,
  samples = 480,
  floor = 0.05,
  events = [],
}: TraceOptions): string {
  const random = rng(seed);
  const mid = height / 2;
  const half = height / 2;

  // Pre-roll a noise table so octaves stay coherent rather than per-sample hash.
  const coarse: number[] = [];
  for (let i = 0; i <= samples; i += 1) coarse.push(random() * 2 - 1);

  const points: string[] = [];
  for (let i = 0; i <= samples; i += 1) {
    const x = i / samples;

    // Two octaves of noise: a slow wander plus the pen's own chatter.
    const slow = coarse[Math.floor(i / 9) % coarse.length];
    const fast = coarse[i];
    const noise = slow * 0.4 + fast * 0.6;

    let gain = floor;
    for (const event of events) gain += envelope(x, event);

    const y = mid - noise * gain * half;
    points.push(`${(x * width).toFixed(2)} ${y.toFixed(2)}`);
  }

  return `M ${points.join(" L ")}`;
}

/** The default quiet-then-event shape used by the hero record. */
export const HERO_EVENTS: SeismicEvent[] = [
  { at: 0.62, magnitude: 0.92, decay: 0.2 },
  { at: 0.84, magnitude: 0.2, decay: 0.09 },
];
