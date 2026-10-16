import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { projects, RECORD_MAGNITUDE } from "../content/data";
import type { Project } from "../content/data";
import Register from "../components/layout/Register";
import Trace from "../components/seismo/Trace";
import ActionLink from "../components/seismo/ActionLink";
import { useArrived } from "../hooks/useArrived";

const Row: FC<{ project: Project }> = ({ project }) => {
  const { t, projectCopy } = useLocale();
  const copy = projectCopy[project.id];
  const { ref, arrived } = useArrived<HTMLElement>();

  if (!copy) return null;


  return (
    <article
      ref={ref}
      className="group border-t border-rule py-10 last:border-b sm:py-14"
    >
      <div className="flex items-baseline justify-between gap-6">
        <h3
          className="w-expanded text-[clamp(1.75rem,5.2vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-bone transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
        >
          {copy.title}
        </h3>
        <span className="data-label shrink-0 text-bone-3">{project.year}</span>
      </div>

      {/* This project's own record, arriving in stepped bands. Only the
          trace is withheld until it arrives — the text is on the sheet from
          first paint, because a reader must never lose a project to a
          scroll observer that did not fire.

          Under the cursor the pen runs the record again at full gain: a second
          trace on the same seed, so it stays in phase with the quiet one, swept
          in left to right by clip-path rather than faded. */}
      <div data-band={arrived ? "arrived" : "pending"} className="relative mt-6 h-14">
        <Trace
          seed={`project-${project.id}`}
          floor={0.05}
          density={2.6}
          events={[{ at: 0.46, magnitude: RECORD_MAGNITUDE * 0.42, decay: 0.22 }]}
          className="absolute inset-0 h-full w-full text-bone-3"
        />
        <div className="absolute inset-0 [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[clip-path:inset(0_0_0_0)] group-focus-within:[clip-path:inset(0_0_0_0)]">
          <Trace
            seed={`project-${project.id}`}
            floor={0.05}
            density={2.6}
            strokeWidth={1.25}
            events={[{ at: 0.46, magnitude: RECORD_MAGNITUDE, decay: 0.22 }]}
            className="h-full w-full text-bone"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="field-label text-bone-3">{copy.role}</p>
          <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.65] font-light text-bone-2">
            {copy.summary}
          </p>
        </div>

        <div className="lg:col-span-5">
          <p className="field-label text-bone-3">{t.projects.stackLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="w-narrow text-[0.875rem] font-medium tracking-[0.04em] text-bone-2"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
            {project.links?.map((link, i) => (
              <ActionLink
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                weight={i === 0 ? "primary" : "secondary"}
              >
                {t.projects.links[link.kind] ?? link.kind}
              </ActionLink>
            ))}
            {!project.links?.length && (
              <p className="field-label text-bone-3">
                {project.access === "private"
                  ? t.projects.privateCode
                  : t.projects.noLinks}
              </p>
            )}
          </div>
        </div>
      </div>

      {project.shots && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {project.shots.map((shot, i) => (
            <figure
              key={shot.large}
              className="overflow-hidden border border-rule"
            >
              <img
                src={shot.large}
                srcSet={`${shot.small} 480w, ${shot.large} 960w`}
                sizes="(min-width: 640px) 48vw, 92vw"
                alt={copy.imageAlts?.[i] ?? copy.title}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
};

/** Register 04. One row of the drum per system built. */
const Projects: FC = () => {
  const { t } = useLocale();

  return (
    <Register
      id="proyectos"
      index={3}
      heading={t.projects.heading}
      lead={t.projects.lead}
      magnitude={0.95}
    >
      <div>
        {projects.map((project) => (
          <Row key={project.id} project={project} />
        ))}
      </div>
    </Register>
  );
};

export default Projects;
