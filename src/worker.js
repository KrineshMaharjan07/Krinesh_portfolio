const worker = {
  async fetch(request) {
    console.log(request.method);
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};

export default worker;
