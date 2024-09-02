"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const fileUpload_1 = __importDefault(require("../middlewares/fileUpload"));
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", userController_1.findAll);
userRoutes.get("/byId/:id", userController_1.findById);
userRoutes.get("/byName/:username", userController_1.findByUsername);
userRoutes.get("/bySearch/:username", userController_1.findBySearch);
userRoutes.patch("/", authorization_1.default, userController_1.updateUser);
userRoutes.patch("/editAvatar", authorization_1.default, fileUpload_1.default.single("avatar"), userController_1.updateAvatar);
userRoutes.patch("/editBanner", authorization_1.default, fileUpload_1.default.single("banner"), userController_1.updateBanner);
userRoutes.delete("/:id", userController_1.deleteUser);
exports.default = userRoutes;
