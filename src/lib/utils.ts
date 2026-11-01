export function resolvePath(path: string): string {
  if (!path) return path;
  if (
    /^(?:[a-z]+:)?\/\//i.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base) return path;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

