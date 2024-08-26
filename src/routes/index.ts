import authRoutes from "./authRoutes";
import postRoutes from "./postRoutes";
import userRoutes from "./userRoutes";
import replyRoutes from "./replyRoutes";
import likeRoutes from "./LikeRoutes";
import followRoutes from "./followRoutes";
import { Router } from "express";

const route = Router();

route.use("/posts", postRoutes);
route.use("/users", userRoutes);
route.use("/auth", authRoutes);
route.use("/reply", replyRoutes);
route.use("/like", likeRoutes);
route.use("/follow", followRoutes);

export default route;
