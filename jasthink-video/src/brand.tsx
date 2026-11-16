import { loadFont } from "@remotion/fonts";
import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

loadFont({ family: "JSans", url: staticFile("fonts/InstrumentSans-Bold.ttf"), weight: "700" });
loadFont({ family: "JSans", url: staticFile("fonts/InstrumentSans-Regular.ttf"), weight: "400" });
loadFont({ family: "JSerif", url: staticFile("fonts/InstrumentSerif-Italic.ttf"), style: "italic" });
loadFont({ family: "JMono", url: staticFile("fonts/JetBrainsMono-Regular.ttf"), weight: "400" });
loadFont({ family: "JMono", url: staticFile("fonts/JetBrainsMono-Bold.ttf"), weight: "700" });

export const C = {
  ink: "#141826",
  muted: "#5B6275",
  blue: "#2F5BE0",
  red: "#E5384F",
  cyan: "#4CC6E9",
  yellow: "#F2C230",
  card: "#FFFFFF",
  line: "#DCE0EA",
};

export const PART = 75;
export const FPS = 30;

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

/** 0→1 progress starting at `start` frame, lasting `dur` frames. */
export const useIn = (start: number, dur = 18) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
};

export const Rise: React.FC<{
  at: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  dist?: number;
}> = ({ at, children, style, dist = 40 }) => {
  const p = useIn(at);
  return (
    <div style={{ opacity: p, translate: `0px ${(1 - p) * dist}px`, ...style }}>
      {children}
    </div>
  );
};

/** Italic serif accent word, like the Jasthink covers. */
export const Em: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = C.blue,
}) => (
  <span
    style={{
      fontFamily: "JSerif",
      fontStyle: "italic",
      fontWeight: 400,
      color,
      letterSpacing: 0,
    }}
  >
    {children}
  </span>
);

export const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(120% 70% at 100% 100%, #FBDDE4 0%, rgba(251,221,228,0) 60%), radial-gradient(90% 50% at 0% 0%, #E6F1FB 0%, rgba(230,241,251,0) 60%), #F6F7FA",
    }}
  />
);

export const Logo: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 14,
        background: C.ink,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "JSans",
        fontWeight: 700,
        fontSize: 42,
      }}
    >
      J
    </div>
    <div style={{ fontFamily: "JSans", fontWeight: 700, fontSize: 34, color: C.ink }}>
      B2B Playbook
    </div>
  </div>
);

export const PartNumber: React.FC = () => (
  <div
    style={{
      fontFamily: "JSans",
      fontWeight: 700,
      fontSize: 120,
      lineHeight: 1,
      color: "transparent",
      WebkitTextStroke: `3px ${C.muted}`,
      opacity: 0.55,
    }}
  >
    {PART}
  </div>
);

export const Kicker: React.FC<{ children: React.ReactNode; at?: number }> = ({
  children,
  at = 0,
}) => (
  <Rise at={at} dist={16}>
    <div
      style={{
        fontFamily: "JMono",
        fontSize: 30,
        letterSpacing: 4,
        color: C.muted,
        textTransform: "uppercase",
      }}
    >
      <span style={{ color: C.yellow }}>▸ </span>
      {children}
    </div>
  </Rise>
);

/** Cyan + red bars with yellow arrow: the Jasthink brand mark. */
export const Bars: React.FC<{ at?: number }> = ({ at = 0 }) => {
  const p = useIn(at, 24);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ width: 300 * p, height: 18, borderRadius: 9, background: C.cyan }} />
        <div style={{ width: 210 * p, height: 18, borderRadius: 9, background: C.red }} />
      </div>
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: "18px solid transparent",
          borderBottom: "18px solid transparent",
          borderLeft: `26px solid ${C.yellow}`,
          opacity: p,
          translate: "0px -16px",
        }}
      />
    </div>
  );
};

export const Footer: React.FC<{ source: string }> = ({ source }) => (
  <div
    style={{
      position: "absolute",
      left: 80,
      right: 80,
      bottom: 110,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 30,
      fontFamily: "JMono",
      fontSize: 24,
      color: C.muted,
      letterSpacing: 1,
    }}
  >
    <div style={{ maxWidth: 760 }}>SUMBER: {source}</div>
    <div style={{ fontFamily: "JSans", fontWeight: 700, color: C.ink, fontSize: 28 }}>
      Share →
    </div>
  </div>
);

/** Shared frame: background, header (logo + part number) and footer. */
export const Frame: React.FC<{ source: string; children: React.ReactNode }> = ({
  source,
  children,
}) => (
  <AbsoluteFill>
    <Background />
    <div
      style={{
        position: "absolute",
        top: 110,
        left: 80,
        right: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo />
      <PartNumber />
    </div>
    <div
      style={{
        position: "absolute",
        top: 300,
        left: 80,
        right: 80,
        bottom: 220,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
    <Footer source={source} />
  </AbsoluteFill>
);

export const H1: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 104,
}) => (
  <div
    style={{
      fontFamily: "JSans",
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.02,
      letterSpacing: -3,
      color: C.ink,
    }}
  >
    {children}
  </div>
);

export const Body: React.FC<{ children: React.ReactNode; size?: number }> = ({
  children,
  size = 48,
}) => (
  <div
    style={{
      fontFamily: "JSans",
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1.25,
      color: C.ink,
    }}
  >
    {children}
  </div>
);

export const BigStat: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  at: number;
  dur?: number;
  size?: number;
}> = ({ value, suffix = "%", prefix = "", at, dur = 40, size = 260 }) => {
  const frame = useCurrentFrame();
  const n = Math.round(
    interpolate(frame, [at, at + dur], [0, value], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    }),
  );
  const p = useIn(at, 14);
  return (
    <div
      style={{
        fontFamily: "JSans",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 0.95,
        letterSpacing: -8,
        color: C.red,
        opacity: p,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {prefix}
      {n}
      {suffix}
    </div>
  );
};
