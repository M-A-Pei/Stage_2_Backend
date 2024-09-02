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
exports.findAllFollowing = findAllFollowing;
exports.findAllFollowers = findAllFollowers;
exports.follow = follow;
exports.isFollowing = isFollowing;
const db_1 = __importDefault(require("../libs/db"));
function findAllFollowing(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findMany({
            where: {
                followers: {
                    some: {
                        id: userId,
                    },
                },
            },
        });
    });
}
function findAllFollowers(userId) {
    return db_1.default.users.findMany({
        where: {
            following: {
                some: {
                    id: userId,
                },
            },
        },
    });
}
function follow(followerId, followedId) {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield isFollowing(followerId, followedId);
        if (x) {
            return yield unfollow(followerId, followedId);
        }
        return yield db_1.default.users.update({
            where: {
                id: followerId,
            },
            data: {
                following: {
                    connect: {
                        id: followedId,
                    },
                },
            },
        });
    });
}
function unfollow(followerId, followedId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.update({
            where: {
                id: followerId,
            },
            data: {
                following: {
                    disconnect: {
                        id: followedId,
                    },
                },
            },
        });
    });
}
function isFollowing(followerId, followedId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield db_1.default.users.findUnique({
            where: {
                id: followerId,
            },
            select: {
                following: {
                    where: {
                        id: followedId,
                    },
                },
            },
        });
        if (response && response.following.length > 0) {
            return true;
        }
        return false;
    });
}
