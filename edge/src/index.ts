const ORIGIN = "docs-1078.olimpia.cc";
const EDGE_TTL = 300;

function forBrowser(response: Response): Response {
  if (response.headers.get("Cache-Control")?.includes("immutable")) return response;
  const out = new Response(response.body, response);
  const type = out.headers.get("Content-Type") ?? "";
  if (!type.startsWith("image/")) out.headers.set("Cache-Control", "no-cache");
  return out;
}

export default {
  async fetch(request: Request, _env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    url.hostname = ORIGIN;
    if (request.method !== "GET") return fetch(new Request(url, request));

    const cache = caches.default;
    const hit = await cache.match(request);
    if (hit) return forBrowser(hit);

    const response = await fetch(new Request(url, request));
    if (response.status === 200 || response.status === 404) {
      const copy = new Response(response.clone().body, response);
      if (!copy.headers.has("Cache-Control")) copy.headers.set("Cache-Control", `public, s-maxage=${EDGE_TTL}`);
      ctx.waitUntil(cache.put(request, copy));
    }
    return forBrowser(response);
  },
};
