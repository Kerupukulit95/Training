import React from "react";
import { Bars, Body, C, Em, Frame, H1, Kicker, Rise } from "../brand";

export const CTA_DURATION = 165;

export const Cta: React.FC = () => (
  <Frame source="6sense 2025 · Forrester 2026 · detail di caption">
    <Kicker>Giliran kamu</Kicker>
    <div style={{ height: 50 }} />
    <Rise at={0}>
      <H1 size={124}>
        Klien terakhirmu <Em>nemu</Em> kamu dari mana?
      </H1>
    </Rise>
    <div style={{ height: 60 }} />
    <Bars at={14} />
    <div style={{ flex: 1 }} />
    <Rise at={30}>
      <div
        style={{
          padding: "36px 40px",
          borderRadius: 28,
          background: C.ink,
          color: "white",
          fontFamily: "JSans",
          fontWeight: 700,
          fontSize: 56,
        }}
      >
        Jawab di komentar 👇
      </div>
    </Rise>
    <div style={{ height: 30 }} />
    <Rise at={50}>
      <Body size={46}>
        Kirim ke <b style={{ color: C.red }}>tim sales</b> kamu, biar berhenti saling nyalahin soal leads.
      </Body>
    </Rise>
  </Frame>
);
