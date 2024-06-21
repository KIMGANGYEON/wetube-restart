import express from "express";
import {
  getJoin,
  getLogin,
  login,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publidOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publidOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter
  .route("/login")
  .all(publidOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
