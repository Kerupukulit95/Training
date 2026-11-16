import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { BigStat, Body, C, Em, Frame, H1, Kicker, Rise, easeOut } from "../brand";

export const SHORTLIST_DURATION = 165;

const TOTAL = 50;
const FILLED = 47; // 94% of 50

export const Shortlist: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Frame source="6sense B2B Buyer Experience Report 2025 · riset global, bukan khusus Indonesia">
      <Kicker>Fakta #1</Kicker>
      <div style={{ height: 40 }} />
      <Rise at={0}>
        <H1 size={96}>
          <Em>94%</Em> tim pembeli udah <Em>ranking</Em> vendor sebelum kontak pertama
        </H1>
      </Rise>
      <div style={{ height: 70 }} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: 22,
          width: 900,
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const start = 20 + i * 1.6;
          const p = interpolate(frame, [start, start + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeOut,
          });
          const filled = i < FILLED;
          return (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                borderRadius: "50%",
                background: filled ? C.red : "transparent",
                border: filled ? "none" : `5px solid ${C.cyan}`,
                scale: String(0.4 + 0.6 * p),
                opacity: p,
              }}
            />
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "flex-end", gap: 30 }}>
        <BigStat value={94} at={95} dur={30} size={200} />
        <Rise at={110} style={{ paddingBottom: 18, maxWidth: 440 }}>
          <Body size={44}>
            Cuma <b style={{ color: C.blue }}>6%</b> yang benar-benar mulai dari nol
          </Body>
        </Rise>
      </div>
    </Frame>
  );
};
