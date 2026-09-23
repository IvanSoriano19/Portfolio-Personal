import { site } from "@/data/portfolio"

export const initials = site.name
  .split(" ")
  .map((word) => word[0])
  .slice(0, 2)
  .join("")

/** Iniciales sobre fondo oscuro, para usar dentro de ImageResponse (icono y Open Graph). */
export function Monogram({
  size,
  fontSize,
  radius = size * 0.28,
}: {
  size: number
  fontSize: number
  radius?: number
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius,
        background: "#1d1d1f",
        color: "#ffffff",
        fontSize,
        fontWeight: 700,
        letterSpacing: -1,
      }}
    >
      {initials}
    </div>
  )
}
