import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.batallasdepapel",
  appName: "Batallas de Papel",
  // Carpeta con la web estática compilada para Android (bun run build:mobile).
  webDir: "mobile-dist",
  android: {
    allowMixedContent: true,
  },
};

export default config;
