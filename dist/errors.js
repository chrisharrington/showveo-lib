"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Success"] = 200] = "Success";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["InternalError"] = 500] = "InternalError";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
class HttpError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.HttpError = HttpError;
