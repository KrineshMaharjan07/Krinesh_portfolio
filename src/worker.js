const worker = {
  async fetch(request, env) {
    try {
      // Try to fetch the static file from the bucket
      return await env.ASSETS.fetch(request);
    } catch (err) {
      console.log("Static asset not found:", request.url);
      return new Response("Not Found", { status: 404 });
    }
  },
};

export default worker;
