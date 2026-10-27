import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { contact } from "../content/data";
import Section from "../components/ink/Section";
import InkLink from "../components/ink/InkLink";

/**
 * Contacto. The address is the largest link on the page, underlined by hand
 * like every link in the cover's paragraph; the other channels follow as one
 * mono row.
 */
const Contact: FC = () => {
  const { t } = useLocale();

  const row = [
    { label: contact.phone, href: contact.phoneHref, aria: t.contact.phone },
    { label: t.contact.linkedin, href: contact.linkedin, external: true },
    { label: t.contact.github, href: contact.github, external: true },
    { label: t.contact.cv, href: contact.cv, download: true },
  ];

  return (
    <Section id="contacto" heading={t.contact.heading}>
      <p className="max-w-[44ch] text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.45] text-paper-2">
        {t.contact.lead}
      </p>

      <p className="mt-10 text-[clamp(1.5rem,4.4vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.035em] [overflow-wrap:anywhere]">
        <InkLink href={`mailto:${contact.email}`} className="whitespace-normal">
          {contact.email}
        </InkLink>
      </p>

      <ul className="mono-label mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {row.map((item, i) => (
          <li key={item.href}>
            <InkLink
              href={item.href}
              aria-label={item.aria}
              download={item.download || undefined}
              order={i + 1}
              className="tabular-nums"
            >
              {item.label}
            </InkLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
