export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap() {
  let routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
