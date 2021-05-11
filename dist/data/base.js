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
const errors_1 = require("../errors");
class BaseService {
    get(url, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${url}${buildQuery(params)}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            });
            if (response.status === errors_1.ErrorCode.InternalError)
                throw new errors_1.HttpError(errors_1.ErrorCode.InternalError, response.body ? response.body.toString() : '');
            if (response.status === errors_1.ErrorCode.Unauthorized)
                throw new errors_1.HttpError(errors_1.ErrorCode.Unauthorized, 'Unauthorized.');
            return yield response.json();
        });
    }
    post(url, params, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            headers = headers || {};
            headers['Content-Type'] = 'application/json';
            return fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: new Headers(headers),
                body: JSON.stringify(params),
                credentials: 'include'
            });
        });
    }
}
exports.default = BaseService;
function buildQuery(params) {
    var query = '';
    for (let name in params)
        query += `&${name}=${params[name] ? encodeURIComponent(params[name]) : ''}`;
    return query ? `?${query.substring(1)}` : query;
}
