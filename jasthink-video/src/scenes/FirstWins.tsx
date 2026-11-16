import React from "react";
import { BigStat, Body, C, Em, Frame, H1, Kicker, Rise, useIn } from "../brand";

export const FIRSTWINS_DURATION = 165;

const Vendor: React.FC<{ label: string; at: number; winner?: boolean }> = ({
  label,
  at,
  winner,
}) => {
  const p = useIn(at);
  const glow = useIn(at + 40, 20);
  return (
    <div
      style={{
        opacity: winner ? p : p * (1 - 0.6 * glow),
        translate: `${(1 - p) * 60}px 0px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 36px",
        borderRadius: 24,
        background: C.card,
        border: `4px solid ${winner ? C.red : C.line}`,
        boxShadow: winner ? `0 14px 40px rgba(229,56,79,${0.25 * glow})` : "none",
        fontFamily: "JSans",
        fontWeight: 700,
        fontSize: 46,
        color: C.ink,
      }}
    >
      <span>{label}</span>
      {winner ? (
        <span style={{ color: C.red, fontSize: 40, opacity: glow }}>DEAL ✓</span>
      ) : null}
    </div>
  );
};

export const FirstWins: React.FC = () => (
  <Frame source="6sense B2B Buyer Experience Report 2025 · riset global">
    <Kicker>Fakta #2</Kicker>
    <div style={{ height: 40 }} />
    <Rise at={0}>
      <H1 size={96}>
        Vendor yang di-<Em>chat</Em> duluan, biasanya yang <Em>menang</Em>
      </H1>
    </Rise>
    <div style={{ height: 60 }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <Vendor label="Vendor #1 (dihubungi pertama)" at={18} winner />
      <Vendor label="Vendor #2" at={26} />
      <Vendor label="Vendor #3" at={34} />
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ display: "flex", alignItems: "flex-end", gap: 30 }}>
      <BigStat value={80} prefix="±" at={80} dur={30} size={200} />
      <Rise at={95} style={{ paddingBottom: 18, maxWidth: 420 }}>
        <Body size={44}>deal jatuh ke vendor yang pertama dihubungi buyer</Body>
      </Rise>
    </div>
  </Frame>
);
