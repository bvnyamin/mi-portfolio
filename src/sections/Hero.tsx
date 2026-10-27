import type { FC } from "react";
import { MousePointer2 } from "lucide-react";
import { useLocale } from "../i18n/context";
import { contact, projects } from "../content/data";
import portrait360 from "../assets/portrait-360.webp";
import portrait720 from "../assets/portrait-720.webp";
import InkLink from "../components/ink/InkLink";
import Rich from "../components/ink/Rich";

/**
 * The cover: one column of type on black, the way a personal index page
 * reads. The name, two mono lines of what and where, a paragraph whose links
 * are underlined by hand, a row of destinations, and the projects as a short
 * list. The portrait sits beside it as a sticker, a little crooked.
 */
const Hero: FC = () => {
  const { t, projectCopy } = useLocale();

  const row = [
    { label: t.registers[3], href: "#proyectos" },
    { label: t.registers[2], href: "#trayectoria" },
    { label: t.contact.shortEmail, href: `mailto:${contact.email}` },
    { label: t.contact.shortCv, href: contact.cv, download: true },
  ];

  return (
    <section id="portada" className="relative min-h-[100svh] overflow-hidden">
      <div className="corner-grid pointer-events-none absolute inset-x-0 top-0 h-[100svh]" aria-hidden="true" />


      <div className="relative mx-auto grid max-w-[1200px] gap-14 px-6 pt-32 pb-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20 lg:px-16 lg:pt-28">
        <div className="max-w-[42rem]">
          <h1 className="text-[clamp(3.25rem,8.6vw,6.75rem)] leading-[0.94] font-semibold tracking-[-0.04em]">
            Nicolás
            <br />
            Villagrán
          </h1>

          {/* On a phone each fact takes its own line; a mono line that breaks
              mid-phrase reads as an error, not as a list. */}
          <p className="mono-label mt-7 text-paper">
            {t.hero.tags.map((tag) => (
              <span key={tag} className="block">
                {tag.split(" · ").map((part, i) => (
                  <span key={part} className="block sm:inline">
                    {i > 0 && (
                      <span className="hidden text-paper-3 sm:inline" aria-hidden="true">
                        {" · "}
                      </span>
                    )}
                    {part}
                  </span>
                ))}
              </span>
            ))}
          </p>

          <p className="mt-9 text-[clamp(1.125rem,1.45vw,1.3125rem)] leading-[1.65] text-paper-2">
            <Rich parts={t.hero.intro} />
          </p>

          <nav aria-label={t.a11y.nav} className="mono-label mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-3">
            {row.map((item, i) => (
              <span key={item.label} className="flex items-center gap-3">
                {i > 0 && <span className="hidden text-paper-3 sm:inline" aria-hidden="true">·</span>}
                <InkLink href={item.href} download={item.download || undefined} order={4 + i}>
                  {item.label}
                </InkLink>
              </span>
            ))}
          </nav>

          <div className="mt-14">
            <p className="mono-label text-paper-3">{t.hero.selected}</p>
            <ul className="mt-3">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={`#proyecto-${project.id}`}
                    className="group mono-label inline-flex items-center gap-3 py-1.5 text-paper transition-colors duration-300 hover:text-accent"
                  >
                    <MousePointer2
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:-rotate-12"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {projectCopy[project.id]?.title ?? project.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="sticker w-[min(19rem,72vw)] self-start justify-self-start rounded-[20px] bg-paper p-2 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] lg:mt-6 lg:justify-self-end">
          <img
            src={portrait720}
            srcSet={`${portrait360} 360w, ${portrait720} 720w`}
            sizes="(min-width: 1024px) 304px, 72vw"
            width={720}
            height={900}
            alt={t.a11y.portrait}
            decoding="async"
            className="block aspect-[4/5] h-auto w-full rounded-[14px] object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
