import BaseService from './base';
import { Episode, Device } from '../models';
declare class EpisodeService extends BaseService {
    getByShowAndSeason(show: string, season: number): Promise<Episode[]>;
    getByShowSeasonAndEpisode(show: string, season: number, episode: number): Promise<Episode>;
    saveProgress(id: string, secondsFromStart: number): Promise<void>;
    stop(episode: Episode, device: Device): Promise<void>;
    private build;
}
declare const _default: EpisodeService;
export default _default;
