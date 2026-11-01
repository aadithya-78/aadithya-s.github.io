# Aadithya S Portfolio

A personal engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide. It includes twelve data-driven project pages, searchable and filterable projects, a skill dashboard, interactive conceptual architecture diagrams, workflow explanations, responsive navigation, and a persistent light/dark theme. Dark mode is the default.

## Requirements and installation

Use Node.js 20.9 or later and npm. Node.js 24 is supported.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To use the exact dependency versions already validated, use `npm ci` instead of `npm install`.

## Checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The production server defaults to port 3000. Project routes are generated at build time. Run a new build after editing data or public assets.

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

The Playwright suite starts the production server automatically. It verifies project filters and search, empty states, all twelve project routes, unknown project handling, theme persistence, missing resume feedback, skill filtering, workflow interactions, architecture switching, mobile navigation, reduced motion, and horizontal overflow at 320, 390, 768, and 1440 pixels. Screenshots are saved under `test-results/`. If Chromium is already installed in a custom location, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path. A local production server on port 3000 is reused outside CI.

## Content configuration

| File                     | Content                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `src/data/profile.ts`    | Name, title, introduction, location, contact URLs, resume path, deployed origin                                 |
| `src/data/projects.ts`   | All project content, hardware, software, protocols, features, architecture, status, images, and detail sections |
| `src/data/experience.ts` | Employers, responsibilities, role labels, and related project links                                             |
| `src/data/skills.ts`     | Skill categories and practical applications                                                                     |
| `src/data/education.ts`  | Degrees, institution information where supplied, and study status                                               |
| `src/data/workflow.ts`   | Engineering process and interactive explanations                                                                |

Components live in `src/components`, routes in `src/app`, and design tokens, layout, responsive rules, and reduced-motion support in `src/app/globals.css`. Tailwind CSS is configured through its PostCSS plugin; shared design classes use CSS variables for both themes. System fonts avoid external font requests.

### Contact and resume

The email, LinkedIn URL, GitHub URL, and resume path are intentionally empty. Buttons explain that the relevant information has not been provided. They never navigate to a fictional profile or report a message as delivered.

1. Edit `email`, `github`, and `linkedin` in `src/data/profile.ts` with verified details. Email must be an address, without the `mailto:` prefix. Social links should be full HTTPS URLs.
2. Add the authentic resume PDF to `public/resume/Aadithya-S-Resume.pdf`.
3. Set `resume: '/resume/Aadithya-S-Resume.pdf'` in the profile data.
4. Review the contact configuration sentence in `Contact` when all details are configured; its visibility follows the configured profile fields.

No contact service credentials or form backend are needed. The configured email action opens the visitor’s email application. This does not assert email delivery.

### Adding and editing projects

Add an entry using `make(...)` in `src/data/projects.ts`. Each project supports `title`, `slug`, `category`, `description`, `hardware`, `software`, `protocols`, `features`, `images`, `developmentStatus`, `featured`, `visual`, `architecture`, and `projectDetails`. A unique slug automatically creates `/projects/<slug>` on the next build. `featured` is available for editorial selection; the default gallery displays all projects in data order.

Use `projectDetails: [{ title, content }]` to add verified engineering problems, hardware design, firmware architecture, integration notes, or development challenges. Unsupported detail sections are omitted. `architecture` contains conceptual functional blocks, not a full schematic or a claim that every link uses the same transport. The energy-monitoring controller’s separate relay branch is described in its detail content.

The panel designer includes a `featureStatus` array. Every feature starts as **To be confirmed** because actual implementation state was not supplied. Update each to **Implemented** or **Planned** only after confirming the status. Medical projects and research concepts retain explicit development-stage descriptions.

### Images

The first entry in each project's `images` array is used on its homepage card and as the main detail-page cover. Reorder that array to choose a different cover. All entries also appear in the gallery. Projects without supplied images retain their labeled technical illustrations.

No stock images or fabricated product photos are used. PCB, waveform, and interface drawings are labeled illustrations. Add authentic assets under `public/images/projects/`, then set the corresponding project’s `images` array:

```ts
images: [
  {
    src: "/images/projects/controller-pcb.webp",
    caption:
      "Actual controller PCB layout — top copper and component placement.",
    width: 1600,
    height: 1000,
  },
];
```

Real images use Next.js Image optimization and descriptive captions. Empty galleries show the technical illustration with an explanation. Use local assets unless you explicitly configure trusted image domains in `next.config.ts`.

## SEO and deployment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, without a trailing slash. Before this is set, the sitemap intentionally contains no guessed public URLs. Next.js may warn that social image URLs fall back to localhost during local builds. The site includes page metadata, project metadata, an Open Graph image, a favicon, robots.txt, sitemap.xml, and Person structured data. No invented social links appear in structured data.

For Vercel:

1. Push this repository to your Git provider and import it into Vercel.
2. Select the Next.js preset. Use `npm run build`, with the output directory left at its default.
3. Add `NEXT_PUBLIC_SITE_URL` in the deployment environment.
4. Deploy and verify the contact links, resume download, metadata, and real image captions against the final content.

For another Node host, run `npm ci`, `npm run build`, and `npm start`, and route HTTPS traffic to the Node server. No database or secret credentials are required. No deployment was performed as part of the local implementation.

## Accessibility and performance

Semantic landmarks, skip navigation, labeled controls, keyboard focus styles, native links/buttons, pressed states on filters, and live search feedback support keyboard and assistive technology use. Both themes have independent color tokens. Motion respects `prefers-reduced-motion`; rotating titles stop, scroll becomes instant, and circuit effects disable under that preference. SVG illustrations scale without bitmap downloads. Project pages are statically generated, and real gallery images use automatic optimization and lazy loading.

## Dependency audit

At implementation time, `npm audit` reported moderate advisories in development-only ESLint dependencies through `minimatch`. The production dependency audit is run separately. Avoid `npm audit fix --force`, which proposes incompatible major downgrades of the lint toolchain; update the lint dependencies when compatible fixes become available.
