import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "es-ES",
  title: "Office Tool Plus (ES)",
  description: "Documentación en español de Office Tool Plus",
  base: "/Office-tool-plus/",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Introducción", link: "/introduction/what-is-office-tool-plus" }
    ],
    sidebar: [
      {
        text: "Introducción",
        items: [
          { text: "¿Qué es Office Tool Plus?", link: "/introduction/what-is-office-tool-plus" }
        ]
      }
    ]
  }
});
