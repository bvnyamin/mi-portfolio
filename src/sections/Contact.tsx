import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { contact } from "../content/data";
import Register from "../components/layout/Register";
import ActionLink from "../components/seismo/ActionLink";

/**
 * Register 06. The end of the sheet. The email is set at display scale because
 * it is the one thing on the page that has to be impossible to miss.
 */
const Contact: FC = () => {
  const { t } = useLocale();

  return (
    <Register
      id="contacto"
      index={6}
      heading={t.contact.heading}
      magnitude={0.82}
    >
      <p className="max-w-[46ch] text-[clamp(1.1875rem,2.4vw,1.75rem)] leading-[1.42] font-light tracking-[-0.01em] text-bone">
        {t.contact.lead}
      </p>

      <a
        href={`mailto:${contact.email}`}
        className="group mt-14 block w-fit max-w-full"
      >
        <span className="w-expanded block overflow-hidden text-[clamp(1.375rem,5.4vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.035em] break-words text-bone">
          {contact.email}
        </span>
        <span className="relative mt-3 block h-px w-full bg-rule" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 block w-full origin-left scale-x-0 bg-bone transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        </span>
      </a>

      {/* A phone number is digits, so it belongs in the instrument's mono with
          tabular figures — the one place on this page where that face is
          carrying something a visitor acts on rather than reads. */}
      <a
        href={contact.phoneHref}
        aria-label={t.contact.phone}
        className="group mt-6 block w-fit py-2"
      >
        <span className="data-label block text-[1.0625rem] tracking-[0.06em] text-bone-2 transition-colors duration-300 group-hover:text-bone">
          {contact.phone}
        </span>
        <span className="relative mt-2 block h-px w-full bg-rule" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 block w-full origin-left scale-x-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        </span>
      </a>

      <div className="mt-14 flex flex-wrap items-end gap-x-12 gap-y-7">
        <ActionLink
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          weight="primary"
        >
          {t.contact.linkedin}
        </ActionLink>
        <ActionLink href={contact.github} target="_blank" rel="noreferrer">
          {t.contact.github}
        </ActionLink>
        <ActionLink href={contact.cv} download>
          {t.contact.cv}
        </ActionLink>
      </div>
    </Register>
  );
};

export default Contact;
