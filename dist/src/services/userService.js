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
exports.findById = findById;
exports.findByUsername = findByUsername;
exports.findBySearch = findBySearch;
exports.findByEmail = findByEmail;
exports.findByEmailOrName = findByEmailOrName;
exports.addUser = addUser;
exports.update = update;
exports.updateAvatar = updateAvatar;
exports.updateBanner = updateBanner;
exports.deleteUser = deleteUser;
const db_1 = __importDefault(require("../libs/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findMany();
    });
}
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findUnique({
            where: {
                id: id,
            },
            include: {
                posts: {
                    include: {
                        images: true,
                    }
                }
            }
        });
    });
}
function findByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findFirst({
            where: {
                username,
            },
        });
    });
}
function findBySearch(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findMany({
            where: {
                username: {
                    contains: username,
                    mode: "insensitive",
                },
            },
        });
    });
}
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findFirst({
            where: {
                email,
            },
        });
    });
}
function findByEmailOrName(string) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.findFirst({
            where: {
                OR: [
                    {
                        username: string,
                    },
                    {
                        email: string,
                    },
                ],
            },
        });
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.create({
            data: Object.assign({}, user),
        });
    });
}
function update(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const oldUser = yield findByEmail(user.email);
        if (oldUser == null) {
            throw new Error("this user doesnt exist");
        }
        const isMatch = yield bcrypt_1.default.compare(user.password, oldUser.password);
        if (!isMatch) {
            throw new Error("password is wrong!");
        }
        return yield db_1.default.users.update({
            data: {
                username: user.username,
                description: user.description,
            },
            where: {
                email: user.email,
            },
        });
    });
}
function updateAvatar(userId, profilePic) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.update({
            where: {
                id: userId
            },
            data: {
                profilePic: profilePic
            }
        });
    });
}
function updateBanner(userId, banner) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.update({
            where: {
                id: userId
            },
            data: {
                bannerPic: banner
            }
        });
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.default.users.delete({
            where: {
                id: id,
            },
        });
    });
}
