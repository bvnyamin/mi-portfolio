import type { FC } from "react";
import { useLocale } from "../../i18n/context";
import { station } from "../../content/data";
import { SHEET, SHEET_COUNT } from "../../lib/sheet";

/** The foot of the sheet: where the record was written, and when it ends. */
const Footer: FC = () => {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule py-10">
      <div className={SHEET}>
        <div className="flex flex-col gap-3 text-bone-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="field-label text-[0.6875rem]">
            © {year} Nicolás Villagrán — {t.footer.rights}
          </p>
          <p className="data-label">
            EST. {station.code} · {t.station.sheet} {SHEET_COUNT} / {SHEET_COUNT} · FIN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
