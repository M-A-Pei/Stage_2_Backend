import Router from "express";
import {
  follow,
  findAllFollowers,
  findAllFollowing,
  isFollowing,
} from "../controllers/FollowController";
import authorization from "../middlewares/authorization";

const followRoutes = Router();

followRoutes.get("/followers", authorization, findAllFollowers);
followRoutes.post("/:userId", authorization, follow);
followRoutes.get("/following", authorization, findAllFollowing);
followRoutes.get("/isFollowing/:userId", authorization, isFollowing);

export default followRoutes;
