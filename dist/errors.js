"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Unauthorized"] = 401] = "Unauthorized";
    ErrorCode[ErrorCode["InternalError"] = 500] = "InternalError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class HttpError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.HttpError = HttpError;
