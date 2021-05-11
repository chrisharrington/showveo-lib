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
class EpisodeService extends base_1.default {
    getByShowAndSeason(show, season) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`${config_1.default.ApiUrl}/shows/${show}/${season}/episodes`);
            return data.map(this.build);
        });
    }
    getByShowSeasonAndEpisode(show, season, episode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.build(yield this.get(`${config_1.default.ApiUrl}/shows/${show}/${season}/${episode}`));
        });
    }
    saveProgress(id, secondsFromStart) {
        return __awaiter(this, void 0, void 0, function* () {
            this.post(`${config_1.default.ApiUrl}/shows/progress`, {
                id,
                secondsFromStart
            });
        });
    }
    stop(episode, device) {
        return __awaiter(this, void 0, void 0, function* () {
            this.post(`${config_1.default.ApiUrl}/shows/${episode.show}/${episode.season}/${episode.number}/${device.host}`);
        });
    }
    build(data) {
        const show = new models_1.Episode();
        Object.keys(data).forEach(k => show[k] = data[k]);
        return show;
    }
}
exports.default = new EpisodeService();
