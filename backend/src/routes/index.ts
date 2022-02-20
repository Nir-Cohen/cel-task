import decodeEncodeRoute from "./decodeEncode";
import { Express } from "express";

const routes = (app: Express) => {
  decodeEncodeRoute(app);
};

export default routes;
