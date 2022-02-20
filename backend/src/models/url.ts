import { Schema, model } from "mongoose";
import Url from "../interfaces/url";

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Url>({
  id: {
    type: String,
    required: true,
  },
  orginalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});

export const UrlModel = model<Url>("Url", schema);
