
import { createServer } from "http";
import { parse } from "url";
import next from "next";
console.log(process.env.NODE_ENV);
const port = parseInt(process.env.PORT || "5009", 10);
const dev = process.env.NODE_ENV !== "production";
console.log(dev);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = req.url ? parse(req.url, true) : parse("", true); // Check if req.url is available
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
});