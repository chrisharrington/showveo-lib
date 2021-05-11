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
class MovieService extends base_1.default {
    getAll(skip, count) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`${config_1.default.ApiUrl}/movies/all?skip=${skip || 0}&count=${count || 0}`);
            return data.map(this.build);
        });
    }
    getByYearAndName(year, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.build(yield this.get(`${config_1.default.ApiUrl}/movies/${year}/${name}`));
        });
    }
    saveProgress(id, secondsFromStart) {
        return __awaiter(this, void 0, void 0, function* () {
            this.post(`${config_1.default.ApiUrl}/movies/progress`, {
                id,
                secondsFromStart
            });
        });
    }
    stop(movie, device) {
        return __awaiter(this, void 0, void 0, function* () {
            this.post(`${config_1.default.ApiUrl}/movies/stop/${movie.name}/${movie.year}/${device.host}`);
        });
    }
    build(data) {
        const movie = new models_1.Movie();
        Object.keys(data).forEach(k => movie[k] = data[k]);
        return movie;
    }
}
exports.default = new MovieService();
