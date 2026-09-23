import { ImageResponse } from "next/og"

import { Monogram } from "@/lib/monogram"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(<Monogram size={64} fontSize={28} />, size)
}
