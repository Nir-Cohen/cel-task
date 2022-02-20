import { encode, decode } from "../controllers/urlControllers";
import { Express } from "express";

const decodeEncodeRoute = (app: Express) => {
  app.post("/encode", encode);
  app.get("/decode/:id", decode);
};

export default decodeEncodeRoute;
