export declare enum Status {
    Missing = "missing",
    Queued = "queued",
    Fulfilled = "fulfilled"
}
export declare enum CastState {
    NoDevicesAvailable = "NoDevicesAvailable",
    NotConnected = "NotConnected",
    Connecting = "Connecting",
    Connected = "Connected"
}
export declare enum PlayableType {
    Movie = 0,
    Episode = 1
}
export interface Playable {
    _id: string;
    runtime: number;
    progress: number;
    subtitlesStatus: Status;
    video(seek?: number): string;
    subtitle(): string;
    saveProgress(time: number): Promise<void>;
    stop(device: Device): Promise<void>;
}
export interface Media {
    name: string;
    poster: string;
    synopsis: string;
    backdrop: string;
    year: string;
    genres: string[];
}
export declare class Movie implements Media, Playable {
    _id: string;
    name: string;
    poster: string;
    backdrop: string;
    synopsis: string;
    runtime: number;
    progress: number;
    year: string;
    subtitlesStatus: Status;
    genres: string[];
    video(seek?: number): string;
    subtitle(): string;
    saveProgress(time: number): Promise<void>;
    stop(device: Device): Promise<void>;
}
export declare class Show implements Media {
    name: string;
    poster: string;
    backdrop: string;
    synopsis: string;
    year: string;
    genres: string[];
    runtime: number;
}
export declare class Season {
    number: number;
    poster: string;
    synopsis: string;
    episodeCount: number;
}
export declare class Episode implements Playable {
    _id: string;
    runtime: number;
    progress: number;
    name: string;
    show: string;
    season: number;
    number: number;
    synopsis: string;
    subtitlesStatus: Status;
    airDate: string;
    video(seek?: number): string;
    subtitle(): string;
    saveProgress(time: number): Promise<void>;
    stop(device: Device): Promise<void>;
}
export declare class Device {
    id: string;
    name: string;
    host: string;
    isThisDevice: boolean;
    constructor();
    static thisDevice(): Device;
}
export declare class PlayOptions {
    device: Device;
    isResume: boolean;
    isSubtitled: boolean;
    constructor(device: Device, isResume: boolean, isSubtitled: boolean);
}
export declare class Castable {
    playable: Playable;
    options: PlayOptions;
    type: PlayableType;
    constructor(playable: Playable, options: PlayOptions, type: PlayableType);
}
export declare enum Navigation {
    Movies = "movies",
    KidMovies = "kid-movies",
    Shows = "shows",
    KidShows = "kid-shows"
}
export declare class User {
    emailAddress: string;
}
