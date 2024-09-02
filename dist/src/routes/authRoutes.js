"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const authRoutes = (0, express_1.Router)();
authRoutes.post("/login", authController_1.login);
authRoutes.post("/register", authController_1.register);
authRoutes.get("/", authorization_1.default, authController_1.getMyInfo);
exports.default = authRoutes;
