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
const models_1 = require("../models");
const config_1 = require("../config");
const base_1 = require("./base");
class DeviceService extends base_1.default {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const devices = yield this.get(`${config_1.default.ApiUrl}/devices`);
            return [models_1.Device.thisDevice()].concat(devices.map((device) => this.build(device)));
        });
    }
    cast(castable) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                url: castable.playable.video(),
                host: castable.options.device.host
            };
            if (castable.playable.type === models_1.PlayableType.Movie)
                params.movieId = castable.playable._id;
            else if (castable.playable.type === models_1.PlayableType.Episode)
                params.episodeId = castable.playable._id;
            yield this.post(`${config_1.default.ApiUrl}/devices/cast`, params);
        });
    }
    pause(device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.post(`${config_1.default.ApiUrl}/devices/pause`, { host: device.host });
        });
    }
    play(device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.post(`${config_1.default.ApiUrl}/devices/play`, { host: device.host });
        });
    }
    stop(device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.post(`${config_1.default.ApiUrl}/devices/stop`, { host: device.host });
        });
    }
    seek(device, time) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.post(`${config_1.default.ApiUrl}/devices/seek`, { host: device.host, time });
        });
    }
    build(data) {
        const show = new models_1.Device();
        Object.keys(data).forEach(k => show[k] = data[k]);
        return show;
    }
}
exports.default = new DeviceService();
