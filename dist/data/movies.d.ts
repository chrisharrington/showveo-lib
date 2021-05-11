import BaseService from './base';
import { Movie, Device } from '../models';
declare class MovieService extends BaseService {
    getAll(skip?: number, count?: number): Promise<Movie[]>;
    getByYearAndName(year: number, name: string): Promise<Movie>;
    saveProgress(id: string, secondsFromStart: number): Promise<void>;
    stop(movie: Movie, device: Device): Promise<void>;
    private build;
}
declare const _default: MovieService;
export default _default;
