import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "Aadithya S — Embedded Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#080f1b",
        color: "#e8edf5",
        padding: "90px",
        borderLeft: "12px solid #74e2cf",
      }}
    >
      <div style={{ fontSize: 22, color: "#74e2cf", letterSpacing: 5 }}>
        HARDWARE / FIRMWARE / SOFTWARE
      </div>
      <div style={{ fontSize: 88, marginTop: 38, fontWeight: 700 }}>
        Aadithya S.
      </div>
      <div style={{ fontSize: 40, marginTop: 20 }}>
        Embedded Systems Engineer
      </div>
      <div style={{ fontSize: 23, marginTop: 55, color: "#94a3b8" }}>
        Chennai, India · Engineering connected systems
      </div>
    </div>,
    size,
  );
}
