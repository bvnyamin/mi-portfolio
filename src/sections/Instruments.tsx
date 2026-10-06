import type { FC } from "react";
import type { ChannelCopy } from "../content/types";
import { useLocale } from "../i18n/context";
import { skillChannelIds } from "../content/data";
import Register from "../components/layout/Register";
import { useArrived } from "../hooks/useArrived";
import TechMark from "../components/seismo/TechMark";

/**
 * Short, repeated rows are where a band reveal costs a reader nothing: the
 * hook never hides what is already on screen, and a backstop clears anything
 * the observer misses.
 */
const Channel: FC<{ channel: ChannelCopy }> = ({ channel }) => {
  const { ref, arrived } = useArrived<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-band={arrived ? "arrived" : "pending"}
      className="border-b border-rule py-7 sm:flex sm:gap-[clamp(32px,5vw,64px)]"
    >
      <dt className="field-label shrink-0 pt-1 text-bone-3 sm:w-[clamp(132px,16vw,196px)]">
        {channel.name}
      </dt>
      <dd className="mt-4 flex flex-wrap gap-x-8 gap-y-5 sm:mt-0">
        {channel.items.map((item) => (
          <span
            key={item}
            className="group/term inline-flex items-center gap-2.5"
          >
            <TechMark
              name={item}
              className="h-[1.15em] w-[1.15em] shrink-0 text-bone-3 transition-colors duration-300 group-hover/term:text-bone"
            />
            <span className="w-narrow text-[clamp(1rem,1.7vw,1.25rem)] font-medium tracking-[-0.005em] text-bone">
              {item}
            </span>
          </span>
        ))}
      </dd>
    </div>
  );
};

/** Register 05 — Stack. The channels this station records on. */
const Instruments: FC = () => {
  const { t } = useLocale();

  return (
    <Register
      id="stack"
      index={4}
      heading={t.instrument.heading}
      lead={t.instrument.lead}
      magnitude={0.46}
    >
      <dl className="border-t border-rule">
        {skillChannelIds.map((id) => {
          const channel = t.instrument.channels[id];
          return channel ? <Channel key={id} channel={channel} /> : null;
        })}
      </dl>
    </Register>
  );
};

export default Instruments;
