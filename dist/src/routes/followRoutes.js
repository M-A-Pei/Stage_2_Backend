"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FollowController_1 = require("../controllers/FollowController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const followRoutes = (0, express_1.default)();
followRoutes.get("/followers", authorization_1.default, FollowController_1.findAllFollowers);
followRoutes.post("/:userId", authorization_1.default, FollowController_1.follow);
followRoutes.get("/following", authorization_1.default, FollowController_1.findAllFollowing);
followRoutes.get("/isFollowing/:userId", authorization_1.default, FollowController_1.isFollowing);
exports.default = followRoutes;
