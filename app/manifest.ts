import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Theorrix — From Nothing to Something",
    short_name: "Theorrix",
    description:
      "Theorrix — From Nothing to Something. Learn technology, build real things, and grow your skills across modern software engineering, systems, and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/media/symbol.webp",
        sizes: "1000x1000",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
