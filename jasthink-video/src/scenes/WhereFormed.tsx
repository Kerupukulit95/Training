import React from "react";
import { Body, C, Em, Frame, H1, Kicker, Rise } from "../brand";

export const WHERE_DURATION = 225;

const items: { icon: string; title: string; note: string }[] = [
  { icon: "🔎", title: "Google", note: "baca artikel, review, perbandingan" },
  { icon: "🤖", title: "ChatGPT / AI", note: "94% buyer bisnis pakai AI saat beli (Forrester 2026)" },
  { icon: "💬", title: "Rekomendasi kolega", note: "grup WA, kenalan, \"vendor langganan\"" },
  { icon: "📱", title: "Konten kamu", note: "yang dia tonton berbulan-bulan sebelum butuh" },
];

export const WhereFormed: React.FC = () => (
  <Frame source="Forrester, The State of Business Buying 2026 · 6sense 2025">
    <Kicker>Terus shortlist-nya dibentuk di mana?</Kicker>
    <div style={{ height: 40 }} />
    <Rise at={0}>
      <H1 size={100}>
        Di tempat yang <Em>nggak</Em> dilihat sales
      </H1>
    </Rise>
    <div style={{ height: 70 }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {items.map((it, i) => (
        <Rise key={it.title} at={30 + i * 30} dist={30}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
              padding: "28px 34px",
              borderRadius: 26,
              background: C.card,
              border: `3px solid ${i === 1 ? C.blue : C.line}`,
            }}
          >
            <div style={{ fontSize: 72 }}>{it.icon}</div>
            <div>
              <div style={{ fontFamily: "JSans", fontWeight: 700, fontSize: 54, color: C.ink }}>
                {it.title}
              </div>
              <Body size={36}>
                <span style={{ color: C.muted }}>{it.note}</span>
              </Body>
            </div>
          </div>
        </Rise>
      ))}
    </div>
  </Frame>
);
