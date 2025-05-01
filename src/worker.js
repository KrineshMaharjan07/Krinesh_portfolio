const worker = { async fetch(request) {
  console.log(request.method); // or any part of it
  return new Response('Hello from Worker!'); }
};

export default worker;