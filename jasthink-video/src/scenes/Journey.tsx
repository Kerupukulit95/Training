import React from "react";
import { BigStat, Body, C, Em, Frame, H1, Kicker, Rise, useIn } from "../brand";

export const JOURNEY_DURATION = 165;

export const Journey: React.FC = () => {
  const fill = useIn(24, 50);
  const marker = useIn(74, 16);
  return (
    <Frame source="6sense B2B Buyer Experience Report 2025 · riset global">
      <Kicker>Fakta #3</Kicker>
      <div style={{ height: 40 }} />
      <Rise at={0}>
        <H1 size={96}>
          Sales baru <Em>tahu</Em> klien itu ada… pas perjalanannya udah <Em>lewat</Em> setengah
        </H1>
      </Rise>
      <div style={{ height: 110 }} />
      <div style={{ position: "relative", width: 920 }}>
        <div style={{ height: 44, borderRadius: 22, background: C.line }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 44,
            width: 920 * 0.61 * fill,
            borderRadius: 22,
            background: `linear-gradient(90deg, ${C.cyan}, ${C.red})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 920 * 0.61 - 4,
            top: -30,
            width: 8,
            height: 104,
            borderRadius: 4,
            background: C.ink,
            opacity: marker,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 920 * 0.61 - 300,
            top: 96,
            width: 600,
            textAlign: "center",
            opacity: marker,
            fontFamily: "JMono",
            fontWeight: 700,
            fontSize: 30,
            color: C.ink,
          }}
        >
          ▲ kontak pertama dgn sales
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 150,
            fontFamily: "JMono",
            fontSize: 28,
            color: C.muted,
          }}
        >
          <span>mulai riset</span>
          <span>tanda tangan</span>
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "flex-end", gap: 30 }}>
        <BigStat value={61} at={70} dur={30} size={200} />
        <Rise at={90} style={{ paddingBottom: 18, maxWidth: 450 }}>
          <Body size={44}>perjalanan beli udah dilewati sebelum ngobrol sama sales</Body>
        </Rise>
      </div>
    </Frame>
  );
};
