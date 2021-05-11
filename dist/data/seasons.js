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
const base_1 = require("./base");
const config_1 = require("../config");
const models_1 = require("../models");
class SeasonService extends base_1.default {
    getByShowName(show) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`${config_1.default.ApiUrl}/shows/${show}/seasons`);
            return data.map(this.build);
        });
    }
    getByShowNameAndNumber(show, number) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`${config_1.default.ApiUrl}/shows/${show}/${number}`);
        });
    }
    build(data) {
        const show = new models_1.Season();
        Object.keys(data).forEach(k => show[k] = data[k]);
        return show;
    }
}
exports.default = new SeasonService();
