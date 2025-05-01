const html = `<!DOCTYPE html>
<html>
  <head>
    <title>My Portfolio</title>
  </head>
  <body>
    <h1>Hello from static HTML!</h1>
  </body>
</html>`;

const worker = {
  async fetch(request) {
    console.log(request.method);
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};

export default worker;
