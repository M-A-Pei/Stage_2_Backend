"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.findAll = findAll;
exports.findById = findById;
exports.findByUsername = findByUsername;
exports.findBySearch = findBySearch;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.updateAvatar = updateAvatar;
exports.updateBanner = updateBanner;
exports.deleteUser = deleteUser;
const userService = __importStar(require("../services/userService"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.findAll();
        res.json(x);
    });
}
function findById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.findById(Number(req.params.id));
        res.json(x);
    });
}
function findByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.findByUsername(req.params.username);
        res.json(x);
    });
}
function findBySearch(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.findBySearch(req.params.username);
        res.json(x);
    });
}
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.addUser(req.body);
        res.json(x);
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const x = yield userService.update(req.body);
            console.log(req.body);
            res.json(x);
        }
        catch (error) {
            (0, errorHandler_1.default)(res, error);
        }
    });
}
function updateAvatar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            if (req.file) {
                req.body.profilePic = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            }
            const x = yield userService.updateAvatar(res.locals.user.id, req.body.profilePic);
            res.json(x);
        }
        catch (error) {
            (0, errorHandler_1.default)(res, error);
        }
    });
}
function updateBanner(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            if (req.file) {
                req.body.banner = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            }
            const x = yield userService.updateBanner(res.locals.user.id, req.body.banner);
            res.json(x);
        }
        catch (error) {
            (0, errorHandler_1.default)(res, error);
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield userService.deleteUser(Number(req.params.id));
        res.json(x);
    });
}
