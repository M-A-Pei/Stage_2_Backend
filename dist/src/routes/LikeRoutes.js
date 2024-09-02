"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = require("../controllers/likeController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const likeRoutes = (0, express_1.Router)();
likeRoutes.post("/:postId", authorization_1.default, likeController_1.addLike);
likeRoutes.get("/check/:postId", authorization_1.default, likeController_1.checkIfLiked);
likeRoutes.get("/:postId", likeController_1.getPostLikes);
exports.default = likeRoutes;
