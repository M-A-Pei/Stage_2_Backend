"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const fileUpload_1 = __importDefault(require("../middlewares/fileUpload"));
const postRoutes = (0, express_1.Router)();
postRoutes.get("/", postController_1.findAll);
postRoutes.get("/:id", postController_1.findPost);
postRoutes.post("/", authorization_1.default, fileUpload_1.default.array("images", 4), postController_1.addPost);
postRoutes.put("/:id", postController_1.updatePost);
postRoutes.delete("/:id", postController_1.deletePost);
exports.default = postRoutes;
