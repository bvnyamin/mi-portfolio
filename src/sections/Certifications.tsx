import type { FC } from "react";
import type { CertCopy } from "../content/types";
import { useLocale } from "../i18n/context";
import { certifications } from "../content/data";
import { formatPeriod } from "../lib/dates";
import Register from "../components/layout/Register";
import { useArrived } from "../hooks/useArrived";

const Row: FC<{ date: string; copy: CertCopy }> = ({ date, copy }) => {
  const { ref, arrived } = useArrived<HTMLLIElement>();

  return (
    <li
      ref={ref}
      data-band={arrived ? "arrived" : "pending"}
      className="flex items-baseline justify-between gap-6 border-b border-rule py-7"
    >
      <div>
        <h3 className="w-narrow text-[clamp(1.0625rem,2.2vw,1.5rem)] leading-snug font-medium tracking-[-0.01em] text-bone">
          {copy.title}
        </h3>
        <p className="field-label mt-2 text-bone-3">{copy.issuer}</p>
      </div>
      <span className="data-label shrink-0 text-bone-2">{date}</span>
    </li>
  );
};

/** Register 06. What calibrates the channels, most recent first. */
const Certifications: FC = () => {
  const { t, locale } = useLocale();

  return (
    <Register
      id="certificaciones"
      index={5}
      heading={t.certifications.heading}
      lead={t.certifications.lead}
      magnitude={0.5}
    >
      <ul className="border-t border-rule">
        {certifications.map((cert) => {
          const copy = t.certifications.items[cert.id];
          if (!copy) return null;
          return (
            <Row
              key={cert.id}
              date={formatPeriod(cert.date, locale, t.path.present)}
              copy={copy}
            />
          );
        })}
      </ul>
    </Register>
  );
};

export default Certifications;
