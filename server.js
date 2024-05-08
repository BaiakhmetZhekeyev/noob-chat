import express from "express";
import { resolve, join } from "path";

const __dirname = resolve();

const app = express();
const port = 3000;

app.use(express.static(join(__dirname, "dist")));

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
