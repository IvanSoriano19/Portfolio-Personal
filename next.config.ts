import path from "node:path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    // Evita que Next tome como raíz el package.json que hay en C:\Users\ivans
    root: path.join(__dirname),
  },
}

export default nextConfig
