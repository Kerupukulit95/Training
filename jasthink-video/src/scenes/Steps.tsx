import React from "react";
import { Body, C, Em, Frame, H1, Kicker, Rise } from "../brand";

export const STEPS_DURATION = 330;

const steps: { title: string; detail: string }[] = [
  {
    title: "Jawab pertanyaan klien sebelum mereka nanya",
    detail: "Bikin konten soal kisaran harga, perbandingan, dan studi kasus. Itu yang mereka cari pas riset.",
  },
  {
    title: "Tes brand kamu di ChatGPT",
    detail: "Tanya: \"vendor [layanan kamu] terbaik di Indonesia?\" Kalau nama kamu nggak muncul, itu PR-nya.",
  },
  {
    title: "Ubah klien lama jadi referensi",
    detail: "Minta testimoni & izin jadi studi kasus. Rekomendasi kolega = jalur shortlist paling kuat.",
  },
];

export const Steps: React.FC = () => (
  <Frame source="Rangkuman Jasthink dari 6sense 2025 & Forrester 2026">
    <Kicker>Biar masuk shortlist hari pertama</Kicker>
    <div style={{ height: 40 }} />
    <Rise at={0}>
      <H1 size={110}>
        <span style={{ color: C.red }}>3</span> langkah <Em>mulai minggu ini</Em>
      </H1>
    </Rise>
    <div style={{ height: 60 }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
      {steps.map((s, i) => (
        <Rise key={s.title} at={30 + i * 85} dist={30}>
          <div style={{ display: "flex", gap: 30 }}>
            <div
              style={{
                flexShrink: 0,
                width: 96,
                height: 96,
                borderRadius: 24,
                background: i === 1 ? C.blue : C.red,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "JSans",
                fontWeight: 700,
                fontSize: 60,
              }}
            >
              {i + 1}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "JSans",
                  fontWeight: 700,
                  fontSize: 58,
                  lineHeight: 1.1,
                  color: C.ink,
                }}
              >
                {s.title}
              </div>
              <div style={{ height: 12 }} />
              <Body size={42}>
                <span style={{ color: C.muted }}>{s.detail}</span>
              </Body>
            </div>
          </div>
        </Rise>
      ))}
    </div>
  </Frame>
);
