import type { FC } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { useLocale } from "../i18n/context";
import { projects } from "../content/data";
import type { Project } from "../content/data";
import Section from "../components/ink/Section";
import InkLink from "../components/ink/InkLink";

const Entry: FC<{ project: Project }> = ({ project }) => {
  const { t, projectCopy } = useLocale();
  const copy = projectCopy[project.id];
  if (!copy) return null;

  return (
    <article id={`proyecto-${project.id}`} className="scroll-mt-20 border-b border-line py-10 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.1] font-semibold tracking-[-0.03em]">
          {copy.title}
        </h3>
        <span className="mono-label text-paper-3 tabular-nums">{project.year}</span>
      </div>
      <p className="mono-label mt-2 text-paper-2">{copy.role}</p>

      <p className="mt-5 max-w-[64ch] text-[1.0625rem] leading-[1.7] text-paper-2">{copy.summary}</p>

      <p className="mono-label mt-5 text-paper-3">{project.stack.join(" / ")}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {project.links?.length ? (
          project.links.map((link, i) => (
            <InkLink key={link.url} href={link.url} order={i} className="mono-label group">
              <span className="inline-flex items-center gap-1.5">
                {t.projects.links[link.kind] ?? link.kind}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            </InkLink>
          ))
        ) : (
          <p className="mono-label inline-flex items-center gap-2 text-paper-3">
            {project.access === "private" && <Lock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />}
            {project.access === "private" ? t.projects.privateCode : t.projects.noLinks}
          </p>
        )}
      </div>

      {project.shots && project.shots.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.shots.map((shot, i, shots) => {
            // A panoramic screenshot takes the full width: halved, a map or
            // a dashboard is too short to read. So does a lone image, which
            // would otherwise leave the second column empty.
            const wide = shots.length === 1 || shot.width / shot.height > 1.9;
            return (
              <figure
                key={shot.large}
                className={`overflow-hidden rounded-[14px] border border-line bg-[#111] ${
                  wide ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={shot.large}
                  srcSet={`${shot.small} 480w, ${shot.large} 960w`}
                  sizes={
                    wide
                      ? "(min-width: 1024px) 860px, 90vw"
                      : "(min-width: 1024px) 420px, (min-width: 640px) 45vw, 90vw"
                  }
                  width={shot.width}
                  height={shot.height}
                  alt={copy.imageAlts?.[i] ?? copy.title}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </figure>
            );
          })}
        </div>
      )}
    </article>
  );
};

/** Proyectos. Each system built, its stack, and where to read the code. */
const Projects: FC = () => {
  const { t } = useLocale();

  return (
    <Section id="proyectos" heading={t.projects.heading} lead={t.projects.lead}>
      {projects.map((project) => (
        <Entry key={project.id} project={project} />
      ))}
    </Section>
  );
};

export default Projects;
