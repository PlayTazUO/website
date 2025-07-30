// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://tazuo.org',
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
            { label: "How to Install", slug: "introduction/how-to-install" },
          ],
        },
        {
          label: "Legion API",
          items: [
            { label: "Python API Documentation", slug: "legion/api" },
            { label: "Legion Scripting", slug: "legion/lscript" },
            { label: "PyProfile", slug: "legion/pyprofile" },
            { label: "PyControl", slug: "legion/pycontrol" },
            { label: "Buff", slug: "legion/buff" },
            { label: "Additional Notes", slug: "legion/notes" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [catppuccin({
        dark: { flavor: "frappe", accent: "mauve" },
        light: { flavor: "latte", accent: "sky" },
      })],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
