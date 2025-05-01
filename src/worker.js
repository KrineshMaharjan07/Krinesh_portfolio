import indexHtml from './out/index.html?raw'; // Needs bundler support (like Vite or Webpack with raw-loader)

const worker = {
  async fetch(request) {
    console.log(request.method); // Logs the HTTP method (e.g., GET, POST)

    return new Response(indexHtml, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
};

export default worker;
