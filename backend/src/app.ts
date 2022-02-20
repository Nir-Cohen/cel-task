import express, { Request, Response } from "express";
import routes from "./routes";
import initMongoConnection from "./mongo";

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>task by CEL coins :)</h1>");
});
initMongoConnection()
  .then(() => {
    console.log("mongo connected");
  })
  .catch((error) => {
    console.log("error", error);
  });

routes(app);
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
