import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { RECORD_MAGNITUDE } from "../content/data";
import profile360 from "../assets/profile-360.webp";
import profile720 from "../assets/profile-720.webp";
import profileFallback from "../assets/profile-720.jpg";
import Register from "../components/layout/Register";
import Trace from "../components/seismo/Trace";

/** The three recording axes, reused as the three lines of work. */
const COMPONENTS = ["N-S", "E-W", "Z"];

/**
 * Register 02. The station's own plate and its readings, then the three
 * components it records on — Full-Stack, geospatial, applied AI.
 */
const Profile: FC = () => {
  const { t } = useLocale();

  return (
    <Register
      id="perfil"
      index={1}
      heading={t.profile.heading}
      magnitude={0.72}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          {/* The plate is graded in the asset rather than by CSS filters: its
              backdrop is brought down onto the page ground, so the hairline
              reads as a mark on the sheet and the figure emerges from the same
              darkness instead of sitting in a lighter box. */}
          <figure className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden border border-rule lg:max-w-none">
            <picture>
              <source
                type="image/webp"
                srcSet={`${profile360} 360w, ${profile720} 720w`}
                sizes="(min-width: 1024px) 300px, 320px"
              />
              <img
                src={profileFallback}
                alt="Nicolás Villagrán"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </picture>
          </figure>

          {/* The plate's readings. A recruiter's first three questions,
              answered before any prose. */}
          <dl className="mt-7 max-w-[320px] border-t border-rule lg:max-w-none">
            {t.profile.facts.map((fact) => (
              <div key={fact.label} className="border-b border-rule py-3.5">
                <dt className="field-label text-bone-3">{fact.label}</dt>
                <dd className="w-narrow mt-1 text-[0.9375rem] leading-snug font-medium text-bone">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-[52ch] text-[clamp(1.1875rem,2vw,1.625rem)] leading-[1.42] font-light tracking-[-0.01em] text-bone">
            {t.profile.lead}
          </p>

          <div className="mt-8 space-y-6">
            {t.profile.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[62ch] text-[1.0625rem] leading-[1.7] font-light text-bone-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Three components of the same record. */}
      <div className="mt-20 border-t border-rule sm:mt-24">
        <h3 className="field-label pt-5 text-bone-3">
          {t.profile.linesHeading}
        </h3>

        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-3">
          {t.profile.lines.map((line, i) => (
            <div key={line.id} className="flex flex-col">
              <div className="flex items-baseline justify-between">
                <span className="data-label text-bone-3">
                  COMP. {COMPONENTS[i]}
                </span>
                <span className="data-label text-bone-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <Trace
                seed={`component-${line.id}`}
                floor={0.08}
                density={2.6}
                events={[{ at: 0.42, magnitude: RECORD_MAGNITUDE, decay: 0.2 }]}
                className="mt-4 h-11 w-full text-bone-2"
              />

              <h4 className="w-narrow mt-6 text-[1.375rem] leading-tight font-semibold tracking-[-0.01em] text-bone">
                {line.name}
              </h4>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] font-light text-bone-2">
                {line.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Register>
  );
};

export default Profile;
