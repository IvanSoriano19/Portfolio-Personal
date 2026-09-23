import { ImageResponse } from "next/og"

import { site } from "@/data/portfolio"
import { Monogram } from "@/lib/monogram"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Imagen que aparece al compartir la web en LinkedIn, X, WhatsApp, etc. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          background: "#ffffff",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            borderRadius: 24,
            background: "#f5f5f7",
            color: "#1d1d1f",
          }}
        >
          <Monogram size={72} fontSize={30} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
              {site.name}
            </div>
            <div style={{ marginTop: 20, fontSize: 44, color: "#1d1d1f", letterSpacing: -1 }}>
              {site.role}
            </div>
            <div style={{ marginTop: 8, fontSize: 36, color: "#6e6e73", letterSpacing: -0.5 }}>
              {site.stack.join(" · ")}
            </div>
          </div>
          <div style={{ fontSize: 26, color: "#86868b" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  )
}

