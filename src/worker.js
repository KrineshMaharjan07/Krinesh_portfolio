const worker = {
  async fetch() {
    const html = `<!DOCTYPE html>
<html>
<head>
  <title>Krinesh Portfolio</title>
</head>
<body>
  <h1>Welcome to Krinesh's Portfolio</h1>
    <p>You visited: ${url.pathname}</p>
</body>
</html>`;
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};

export default worker;
