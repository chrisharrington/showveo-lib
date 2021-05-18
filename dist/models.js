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
exports.User = exports.Navigation = exports.Castable = exports.PlayOptions = exports.Device = exports.Episode = exports.Season = exports.Show = exports.Movie = exports.PlayableType = exports.CastState = exports.Status = void 0;
const movies_1 = require("./data/movies");
const episodes_1 = require("./data/episodes");
const config_1 = require("./config");
const extensions_1 = require("./extensions");
var Status;
(function (Status) {
    Status["Missing"] = "missing";
    Status["Queued"] = "queued";
    Status["Fulfilled"] = "fulfilled";
})(Status = exports.Status || (exports.Status = {}));
var CastState;
(function (CastState) {
    CastState["Idle"] = "IDLE";
    CastState["Paused"] = "PAUSED";
    CastState["Playing"] = "PLAYING";
    CastState["Buffering"] = "BUFFERING";
})(CastState = exports.CastState || (exports.CastState = {}));
var PlayableType;
(function (PlayableType) {
    PlayableType[PlayableType["Movie"] = 0] = "Movie";
    PlayableType[PlayableType["Episode"] = 1] = "Episode";
})(PlayableType = exports.PlayableType || (exports.PlayableType = {}));
class Movie {
    constructor() {
        this.type = PlayableType.Movie;
    }
    video(seek) {
        return `${config_1.default.ApiUrl}/movies/play/${this.year}/${extensions_1.StringExtensions.toKebabCase(this.name)}?seek=${seek || 0}`;
    }
    subtitle() {
        return `${config_1.default.ApiUrl}/movies/subtitle/${this.year}/${extensions_1.StringExtensions.toKebabCase(this.name)}`;
    }
    saveProgress(time) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movies_1.default.saveProgress(this._id, time);
        });
    }
    stop(device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield movies_1.default.stop(this, device);
        });
    }
}
exports.Movie = Movie;
class Show {
}
exports.Show = Show;
class Season {
}
exports.Season = Season;
class Episode {
    constructor() {
        this.type = PlayableType.Episode;
    }
    video(seek) {
        return `${config_1.default.ApiUrl}/shows/play/${this.show}/${this.season}/${this.number}?seek=${seek || 0}`;
    }
    subtitle() {
        return `${config_1.default.ApiUrl}/shows/subtitle/${this._id}`;
    }
    saveProgress(time) {
        return __awaiter(this, void 0, void 0, function* () {
            yield episodes_1.default.saveProgress(this._id, time);
        });
    }
    stop(device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield episodes_1.default.stop(this, device);
        });
    }
}
exports.Episode = Episode;
class Device {
    constructor() {
        this.isThisDevice = false;
    }
    static thisDevice() {
        const device = new Device();
        device.id = '';
        device.name = 'This Device';
        device.host = 'local';
        device.isThisDevice = true;
        return device;
    }
}
exports.Device = Device;
class PlayOptions {
    constructor(device, isResume, isSubtitled) {
        this.device = device;
        this.isResume = isResume;
        this.isSubtitled = isSubtitled;
    }
}
exports.PlayOptions = PlayOptions;
class Castable {
    constructor(playable, options) {
        this.playable = playable;
        this.options = options;
    }
}
exports.Castable = Castable;
var Navigation;
(function (Navigation) {
    Navigation["Movies"] = "movies";
    Navigation["KidMovies"] = "kid-movies";
    Navigation["Shows"] = "shows";
    Navigation["KidShows"] = "kid-shows";
})(Navigation = exports.Navigation || (exports.Navigation = {}));
class User {
}
exports.User = User;
