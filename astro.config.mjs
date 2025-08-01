// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tazuo.org",
  integrations: [
    starlight({
      logo: {
        src: "/src/assets/TazUO.webp",
        alt: "TazUO Logo",
        replacesTitle: true,
      },
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
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "How to Install",
              slug: "introduction/how-to-install",
              badge: { text: "New", variant: "success" },
            },
          ],
        },
        {
          label: "TazUO Wiki",
          autogenerate: { directory: "wiki" , collapsed: true },
        },
        {
          label: "Legion Scripting",
          autogenerate: { directory: "legion" , collapsed: true },
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
