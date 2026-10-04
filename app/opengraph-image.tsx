import { ImageResponse } from "next/og";

export const alt = "Xyryll Jay Taneo — Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f5f5f5",
          color: "#171717",
          display: "flex",
          height: "100%",
          padding: "54px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #171717",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 28, fontWeight: 700 }}>
            &lt;/&gt; xy-real
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: "-3px" }}>
              Xyryll Jay Taneo
            </div>
            <div style={{ color: "#5f6877", display: "flex", fontSize: 32, marginTop: 16 }}>
              Full-stack developer building practical systems for communities.
            </div>
          </div>

          <div style={{ color: "#5f6877", display: "flex", fontFamily: "monospace", fontSize: 22 }}>
            Next.js · Flutter · Firebase · Supabase
          </div>
        </div>
      </div>
    ),
    size,
  );
}
