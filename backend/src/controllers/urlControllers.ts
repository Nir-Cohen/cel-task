import { validateUrl } from "../utils/utils";
import { UrlModel } from "../models/url";
const shortid = require("shortid");
import { Request, Response, NextFunction } from "express";

export const encode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { origUrl } = req?.body;
    console.log(origUrl);
    const urlId = shortid.generate();
    console.log(`generated a new URL: ${urlId}`);
    if (origUrl !== "undefined" && validateUrl(origUrl)) {
      try {
        let url = await UrlModel.findOne({ orginalUrl: origUrl });
        console.log(`find url in database ${url}`);
        console.log(`shorten id npm ${urlId}`);
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `http://localhost:3005/decode/${urlId}`;
          console.log(shortUrl);
          url = new UrlModel({
            id: urlId,
            orginalUrl: origUrl,
            shortUrl: shortUrl,
          });

          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
      }
    } else {
      res.status(400).json("Invalid Original Url");
    }
  } catch (err) {
    next(err);
  }
};

export const decode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(`handle the get method`);
    console.log(req.params.id);
    const url = await UrlModel.findOne({ id: req.params.id });
    if (url) {
      return res.redirect(url.orginalUrl);
    } else res.status(404).json("Not found");

    res.send("OK");
  } catch (err) {
    next(err);
  }
};
