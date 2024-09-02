"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.register = register;
const userService_1 = require("./userService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function login(usernameOrEmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExists = yield (0, userService_1.findByEmailOrName)(usernameOrEmail);
        if (userExists == null) {
            throw new Error("account doesnt exist!");
        }
        const isMatch = yield bcrypt_1.default.compare(password, userExists.password);
        if (!isMatch) {
            throw new Error("password is wrong!");
        }
        const token = jsonwebtoken_1.default.sign(userExists, process.env.SECRET || "secret", {
            expiresIn: "1h",
        });
        return token;
    });
}
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkUsername = yield (0, userService_1.findByUsername)(user.username);
        if (checkUsername != null) {
            throw new Error("username already exists");
        }
        const checkEmail = yield (0, userService_1.findByEmail)(user.email);
        if (checkEmail != null) {
            throw new Error("email already exists");
        }
        const hashedPw = yield bcrypt_1.default.hash(user.password, 10);
        user.password = hashedPw;
        const newUser = yield (0, userService_1.addUser)(user);
        return newUser;
    });
}
