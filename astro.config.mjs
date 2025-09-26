// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tazuo.org",
  integrations: [
    starlight({
      routeMiddleware: './src/routeData.ts',
      logo: {
        src: "/src/assets/TazUO.webp",
        alt: "TazUO Logo",
        replacesTitle: true,
      },
      favicon: '/favicon.ico',
      title: "TazUO",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/PlayTazUO/TazUO",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/QvqzkB95G4",
        },
      ],
      sidebar: [
        {
          label: "How to Install",
          slug: "introduction/how-to-install",
          badge: { text: "🔥", variant: "default" },
        },
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Modern vs Legacy",
              slug: "introduction/modern-vs-legacy",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "Code Contributions",
              slug: "introduction/code-contributions",
              badge: { text: "New", variant: "success" },
            },
          ],
        },
        {
          label: "TazUO Wiki",
          autogenerate: { directory: "wiki", collapsed: false },
        },
        {
          label: "Legion Scripting",
          autogenerate: { directory: "legion", collapsed: true },
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "frappe", accent: "mauve" },
          light: { flavor: "latte", accent: "sky" },
        }),
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
