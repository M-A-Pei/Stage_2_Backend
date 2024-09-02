"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
// import ERROR_CODE from "./constants/ERROR_CODE";
// import ERROR_MESSAGE from "./constants/ERROR_MESSAGE";
function errorHandler(res, error) {
    const message = error.message;
    return res
        .status(500)
        .json({ error: message });
}
