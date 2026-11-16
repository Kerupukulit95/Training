import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Hook, HOOK_DURATION } from "./scenes/Hook";
import { Shortlist, SHORTLIST_DURATION } from "./scenes/Shortlist";
import { FirstWins, FIRSTWINS_DURATION } from "./scenes/FirstWins";
import { Journey, JOURNEY_DURATION } from "./scenes/Journey";
import { WhereFormed, WHERE_DURATION } from "./scenes/WhereFormed";
import { Steps, STEPS_DURATION } from "./scenes/Steps";
import { Cta, CTA_DURATION } from "./scenes/Cta";

export const T = 10;

const scenes: [string, React.FC, number][] = [
  ["Hook", Hook, HOOK_DURATION],
  ["Shortlist", Shortlist, SHORTLIST_DURATION],
  ["FirstWins", FirstWins, FIRSTWINS_DURATION],
  ["Journey", Journey, JOURNEY_DURATION],
  ["WhereFormed", WhereFormed, WHERE_DURATION],
  ["Steps", Steps, STEPS_DURATION],
  ["Cta", Cta, CTA_DURATION],
];

export const VIDEO_DURATION =
  scenes.reduce((a, [, , d]) => a + d, 0) - T * (scenes.length - 1);

export const SCENES = scenes;

export const Video: React.FC = () => (
  <TransitionSeries>
    {scenes.flatMap(([name, Comp, d], i) => {
      const seq = (
        <TransitionSeries.Sequence key={name} name={name} durationInFrames={d}>
          <Comp />
        </TransitionSeries.Sequence>
      );
      return i === 0
        ? [seq]
        : [
            <TransitionSeries.Transition
              key={`${name}-t`}
              presentation={fade()}
              timing={linearTiming({ durationInFrames: T })}
            />,
            seq,
          ];
    })}
  </TransitionSeries>
);
