import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { contact, station } from "../content/data";
import { HERO_EVENTS } from "../lib/seismo";
import Trace from "../components/seismo/Trace";
import PickMark from "../components/seismo/PickMark";
import TimeGrid from "../components/seismo/TimeGrid";
import ActionLink from "../components/seismo/ActionLink";
import LocaleSwitch from "../components/layout/LocaleSwitch";
import { SHEET, SHEET_COUNT } from "../lib/sheet";

/**
 * Register 01. The instrument is already running when the visitor arrives: the
 * pen writes one quiet record across the sheet, breaks into an event, and the
 * name lands beneath it on the same datum.
 */
const Hero: FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="portada"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-20 pb-8 lg:pt-12"
    >
      <TimeGrid className="absolute inset-0 -z-10" labels lines={false} />

      {/* Station header */}
      <div className={SHEET}>
        <div className="flex items-start justify-between gap-6 pt-8 sm:pt-10">
          <div className="data-label space-y-1 text-bone-3">
            <p className="text-bone-2">
              EST. {station.code} · CL
            </p>
            <p>
              LAT {station.lat} LON {station.lon}
            </p>
            <p className="hidden sm:block">{t.station.component}</p>
          </div>

          <LocaleSwitch className="-mt-1.5 hidden lg:flex" />
        </div>
      </div>

      {/* The record */}
      <div className="relative py-10 sm:py-14">
        <div className="relative h-[clamp(120px,22vh,210px)] w-full">
          <div className="absolute inset-x-0 top-1/2 h-px bg-grid" />
          <Trace
            seed="hero-record"
            floor={0.055}
            density={1.9}
            events={HERO_EVENTS}
            draw
            duration={2.6}
            delay={0.15}
            title={t.a11y.heroTrace}
            className="absolute inset-0 h-full w-full text-bone"
          />
          <PickMark phase="P" at={61} />

          {/* The nib, still riding the paper once the run is written. It enters
              only after the pen has finished its pass, so the record is read
              before anything starts moving again. */}
          <div
            className="pointer-events-none absolute top-1/2 right-[2.5%] -translate-y-1/2"
            style={{ ["--pen-live-delay" as string]: "2.9s" }}
            aria-hidden="true"
          >
            <span className="pen-live block h-5 w-px bg-bone" />
          </div>
        </div>
      </div>

      {/* The nameplate, locked to the record's own datum */}
      <div className={SHEET}>
        {/* The name never animates in. The pen is the authored moment; the
            facts are present the instant the page paints, so a slow network or
            a failed script can never cost the visitor the one thing that must
            always be on screen. */}
        <h1 className="w-expanded text-[clamp(2.75rem,8.5vw,6rem)] leading-[0.88] font-semibold tracking-[-0.035em] text-bone uppercase">
          Nicolás
          <br />
          Villagrán
        </h1>

        <p className="field-label mt-7 text-bone-2">{t.hero.role}</p>

        <p className="mt-4 max-w-[46ch] text-[clamp(1.0625rem,1.7vw,1.375rem)] leading-[1.5] font-light text-bone-2">
          {t.hero.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-8 sm:mt-12">
          <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
            <ActionLink href="#proyectos" weight="primary">
              {t.hero.record}
            </ActionLink>
            <ActionLink href={contact.cv} download>
              {t.hero.cv}
            </ActionLink>
          </div>

          <p className="data-label hidden text-bone-3 sm:block">
            {t.station.sheet} 01 / {SHEET_COUNT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
