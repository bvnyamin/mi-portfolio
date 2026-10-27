import type { FC } from "react";
import { useLocale } from "../i18n/context";
import { skillChannelIds } from "../content/data";
import Section from "../components/ink/Section";
import TechMark from "../components/ink/TechMark";

/**
 * Stack. One card per channel, ruled by a hairline and rounded; a card
 * inverts to paper under the pointer, the same state the work list uses.
 */
const Stack: FC = () => {
  const { t } = useLocale();
  const channels = skillChannelIds
    .map((id) => ({ id, channel: t.instrument.channels[id] }))
    .filter((row) => row.channel !== undefined);

  return (
    <Section id="stack" heading={t.instrument.heading} lead={t.instrument.lead}>
      <dl className="grid gap-3 sm:grid-cols-2">
        {channels.map(({ id, channel }) => (
          <div
            key={id}
            className="group rounded-2xl border border-line p-5 transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-night sm:p-6 sm:last:odd:col-span-2"
          >
            <dt className="text-[1.0625rem] font-semibold tracking-[-0.015em]">{channel.name}</dt>
            <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {channel.items.map((item) => (
                <span
                  key={item}
                  className="mono-label inline-flex items-center gap-1.5 text-paper-2 normal-case transition-colors duration-200 group-hover:text-night/75"
                >
                  <TechMark name={item} className="h-3.5 w-3.5 shrink-0" />
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Stack;
