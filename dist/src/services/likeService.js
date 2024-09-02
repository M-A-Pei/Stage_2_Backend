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
exports.addLike = addLike;
exports.deleteLike = deleteLike;
exports.getAllPostLikes = getAllPostLikes;
exports.checkIfLiked = checkIfLiked;
const db_1 = __importDefault(require("../libs/db"));
function addLike(postId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const check = yield checkIfLiked(postId, userId);
        if (check)
            return yield deleteLike(postId, userId);
        return yield db_1.default.like.create({
            data: {
                postId, userId
            }
        });
    });
}
function deleteLike(postId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.like.delete({
            where: {
                postId_userId: { postId, userId }
            }
        });
    });
}
function getAllPostLikes(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.like.findMany({
            where: {
                postId
            }
        });
    });
}
function checkIfLiked(postId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const likesList = yield getAllPostLikes(postId); //ambil semua like dari suatu post
        let x = false;
        likesList.forEach((e) => {
            if (e.userId == userId) { //cek satu satu klo udh di like atau blm
                x = true;
            }
        });
        return x;
    });
}
