import type { FC } from "react";
import { useLocale } from "../../i18n/context";
import { CONTAINER } from "../../lib/layout";

const Footer: FC = () => {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={`pt-24 pb-10 ${CONTAINER}`}>
      <div className="mono-label flex flex-col gap-2 border-t border-line pt-6 text-paper-3 sm:flex-row sm:justify-between">
        <p>
          © {year} Nicolás Villagrán Peña — {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
};

export default Footer;
