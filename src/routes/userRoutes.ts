import { Router } from "express";
import {
  findAll,
  findById,
  findByUsername,
  updateUser,
  deleteUser,
  findBySearch,
  updateAvatar,
  updateBanner
} from "../controllers/userController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";
import { uploadCloudinary } from "../middlewares/cloudinary";

const userRoutes = Router();

userRoutes.get("/", findAll);
userRoutes.get("/byId/:id", findById);
userRoutes.get("/byName/:username", findByUsername);
userRoutes.get("/bySearch/:username", findBySearch);
userRoutes.patch("/", authorization, updateUser);
userRoutes.patch("/editAvatar", authorization, upload.single("avatar"), uploadCloudinary, updateAvatar);
userRoutes.patch("/editBanner", authorization, upload.single("banner"), uploadCloudinary, updateBanner);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
