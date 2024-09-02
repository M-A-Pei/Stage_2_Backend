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
exports.addReply = addReply;
exports.findAllInPost = findAllInPost;
exports.findAllForUser = findAllForUser;
const db_1 = __importDefault(require("../libs/db"));
function addReply(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.default.posts.create({
            data: Object.assign(Object.assign({}, reply), { images: {
                    create: reply.images,
                } }),
        });
    });
}
function findAllInPost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.findMany({
            where: { parentId: postId },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true,
                    },
                },
                images: true,
                comments: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                profilePic: true,
                            },
                        },
                    },
                },
            },
        });
    });
}
function findAllForUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.posts.findMany({
            where: {
                author: {
                    username,
                },
            },
            include: {
                images: true
            }
        });
    });
}
