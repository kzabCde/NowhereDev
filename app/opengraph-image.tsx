import { ImageResponse } from "next/og";

export const alt = "NOWHEREDEV — Proof-first Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070a0a",
          color: "#f3f3ed",
          padding: "64px 72px",
          border: "1px solid #1f2929",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#00e5ff",
                color: "#071010",
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              N/D
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "0.16em" }}>
              NOWHEREDEV
            </div>
          </div>
          <div style={{ color: "#00e5ff", fontSize: 17, letterSpacing: "0.12em" }}>
            PROOF-FIRST PRODUCT ENGINEER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020 }}>
          <div style={{ color: "#8b9999", fontSize: 20, marginBottom: 22 }}>
            WEB · ANDROID · DATA · AI · PRODUCTION
          </div>
          <div
            style={{
              fontSize: 70,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            Building intelligent digital products from data to interface.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#8b9999", fontSize: 16 }}>
          <span>Thailand</span>
          <span>NOWHEREDEV / 2026</span>
        </div>
      </div>
    ),
    size
  );
}
