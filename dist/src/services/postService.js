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
exports.findAll = findAll;
exports.findOne = findOne;
exports.addPost = addPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
const db_1 = __importDefault(require("../libs/db"));
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.findMany({
            where: {
                parentId: null,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true,
                    },
                },
                comments: true,
                images: true,
            },
        });
    });
}
function findOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true,
                    },
                },
                comments: true,
                images: true,
            },
        });
    });
}
function addPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.create({
            data: Object.assign(Object.assign({}, post), { images: {
                    create: post.images
                } }),
        });
    });
}
function updatePost(post, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.update({
            where: {
                id,
            },
            data: {
                body: post.body,
            },
        });
    });
}
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.delete({
            where: {
                id,
            },
        });
    });
}
