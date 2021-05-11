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
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const base_1 = require("./base");
class AuthService extends base_1.default {
    signIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.post(`${config_1.default.ApiUrl}/auth`, { email, password });
            if (result.status !== 200)
                return null;
            return yield result.json();
        });
    }
    isAuthorized(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token)
                return false;
            const response = yield fetch(`${config_1.default.ApiUrl}/auth?token=${token}`, {
                method: 'GET',
                mode: 'cors'
            });
            return response.status === 200;
        });
    }
}
exports.default = new AuthService();
