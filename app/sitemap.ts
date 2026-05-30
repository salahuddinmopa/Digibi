import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/services";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://digiblygroup.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/portfolio`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/get-a-quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}${s.href}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
