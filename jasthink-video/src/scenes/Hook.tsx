import React from "react";
import { BigStat, Bars, Body, C, Em, Frame, H1, Kicker, Rise } from "../brand";

export const HOOK_DURATION = 120;

export const Hook: React.FC = () => (
  <Frame source="6sense B2B Buyer Experience Report 2025 · riset global">
    <Kicker>B2B · Buyer Journey</Kicker>
    <div style={{ height: 50 }} />
    <Rise at={2}>
      <H1 size={118}>
        Klien udah milih <Em>vendor</Em>, sebelum <Em>chat</Em> sales kamu?
      </H1>
    </Rise>
    <div style={{ flex: 1 }} />
    <Bars at={14} />
    <div style={{ height: 50 }} />
    <div style={{ display: "flex", alignItems: "flex-end", gap: 36 }}>
      <BigStat value={94} at={20} dur={36} />
      <Rise at={36} style={{ paddingBottom: 26, maxWidth: 380 }}>
        <Body size={44}>
          buyer B2B udah punya <b style={{ color: C.red }}>vendor favorit</b> duluan
        </Body>
      </Rise>
    </div>
  </Frame>
);
