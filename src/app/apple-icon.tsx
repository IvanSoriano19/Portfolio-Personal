import { ImageResponse } from "next/og"

import { Monogram } from "@/lib/monogram"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

/** iOS aplica sus propias esquinas redondeadas, por eso aquí va cuadrado. */
export default function AppleIcon() {
  return new ImageResponse(<Monogram size={180} fontSize={76} radius={0} />, size)
}
