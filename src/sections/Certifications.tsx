import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { certifications } from "../content/data";
import { formatPeriod } from "../lib/dates";
import Section from "../components/ink/Section";

/** Certificaciones. Date, title, issuer — newest first. */
const Certifications: FC = () => {
  const { t, locale } = useLocale();
  const rows = certifications.filter((cert) => t.certifications.items[cert.id]);

  return (
    <Section id="certificaciones" heading={t.certifications.heading} lead={t.certifications.lead}>
      <ul className="border-t border-line">
        {rows.map((cert) => {
          const copy = t.certifications.items[cert.id];
          return (
            <li
              key={cert.id}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8"
            >
              <p className="mono-label pt-0.5 text-paper-3 tabular-nums">
                {formatPeriod(cert.date, locale, t.path.present)}
              </p>
              <div>
                <p className="text-[1.0625rem] leading-snug font-medium">{copy.title}</p>
                <p className="mt-1 text-[0.9375rem] text-paper-2">{copy.issuer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Certifications;
