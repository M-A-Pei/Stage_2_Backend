"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const replyController_1 = require("../controllers/replyController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const fileUpload_1 = __importDefault(require("../middlewares/fileUpload"));
const replyRoutes = (0, express_1.Router)();
replyRoutes.get("/:postId", replyController_1.findAllInPost); //get all replies to a post
replyRoutes.get("/user/:username", replyController_1.findAllForUser); //get all replies to a post
replyRoutes.post("/:postId", authorization_1.default, fileUpload_1.default.array("image", 4), replyController_1.create); //make a new reply to a post
exports.default = replyRoutes;
