import mongoose from "mongoose";

const initMongoConnection = async () => {
  //short-mongo-db for docker
  return mongoose.connect("mongodb://short-mongo-db:27017/test");
};

export const destroyMongoConnection = async () => mongoose.disconnect();

export default initMongoConnection;
