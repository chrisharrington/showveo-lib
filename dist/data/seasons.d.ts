import BaseService from './base';
import { Season, Episode } from '../models';
interface SeasonData {
    season: Season;
    episodes: Episode[];
}
declare class SeasonService extends BaseService {
    getByShowName(show: string): Promise<Season[]>;
    getByShowNameAndNumber(show: string, number: number): Promise<SeasonData>;
    private build;
}
declare const _default: SeasonService;
export default _default;
