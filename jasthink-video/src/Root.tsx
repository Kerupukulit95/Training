import React from "react";
import { Composition, Folder } from "remotion";
import { SCENES, Video, VIDEO_DURATION } from "./Video";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Jasthink-P75"
      component={Video}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={VIDEO_DURATION}
    />
    <Folder name="P75-Scenes">
      {SCENES.map(([name, Comp, d]) => (
        <Composition
          key={name}
          id={`P75-${name}`}
          component={Comp}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={d}
        />
      ))}
    </Folder>
  </>
);
