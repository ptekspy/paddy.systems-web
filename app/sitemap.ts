import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://paddy.systems/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://paddy.systems/white-labelling-readiness",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://paddy.systems/writing",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://paddy.systems/contact",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://paddy.systems/about",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://paddy.systems/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
