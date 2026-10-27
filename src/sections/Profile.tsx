import type { FC } from "react";
import { useLocale } from "../i18n/context";
import Section from "../components/ink/Section";
import Rich from "../components/ink/Rich";

/**
 * Perfil. The lead in full ink, the rest a step quieter, the facts as a
 * mono list, and the three lines of work as rows under hairlines.
 */
const Profile: FC = () => {
  const { t } = useLocale();

  return (
    <Section id="perfil" heading={t.profile.heading}>
      <p className="max-w-[40ch] text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.35] font-medium tracking-[-0.02em] text-balance">
        {t.profile.lead}
      </p>

      <div className="mt-8 max-w-[62ch] space-y-5">
        {t.profile.body.map((paragraph, i) => (
          <p key={i} className="text-[1.0625rem] leading-[1.7] text-paper-2">
            <Rich parts={paragraph} wrap />
          </p>
        ))}
      </div>

      <dl className="mt-10 grid gap-6 sm:grid-cols-3">
        {t.profile.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="mono-label text-paper-3">{fact.label}</dt>
            <dd className="mt-1.5 text-[0.9375rem] leading-snug text-paper">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-16 text-[1.25rem] leading-snug font-semibold tracking-[-0.02em]">
        {t.profile.linesHeading}
      </h3>
      <ul className="mt-4 border-t border-line">
        {t.profile.lines.map((line) => (
          <li
            key={line.id}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8"
          >
            <h4 className="text-[1.125rem] leading-snug font-semibold tracking-[-0.015em]">
              {line.name}
            </h4>
            <p className="max-w-[56ch] text-[1rem] leading-[1.65] text-paper-2">{line.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Profile;
