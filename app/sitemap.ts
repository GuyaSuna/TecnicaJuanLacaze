import type { MetadataRoute } from "next";
import { courses } from "./content/courses";
import { lastReview, navigation, siteUrl } from "./content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...navigation.map((item) => item.href), ...courses.map((course) => `/cursos/${course.slug}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "/" : `${path}/`}`,
    lastModified: lastReview,
  }));
}
