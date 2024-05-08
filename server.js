import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("./dist"));

app.use("/*", (_, res) =>
  res.sendFile(path.join(__dirname, "dist/index.html")),
);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
