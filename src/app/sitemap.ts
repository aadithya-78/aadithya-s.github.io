import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return profile.siteUrl
    ? [
        { url: profile.siteUrl },
        ...projects.map((p) => ({
          url: `${profile.siteUrl}/projects/${p.slug}`,
        })),
      ]
    : [];
}
