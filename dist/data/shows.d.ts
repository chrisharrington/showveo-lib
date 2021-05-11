import BaseService from './base';
import { Show } from '../models';
declare class ShowService extends BaseService {
    getAll(): Promise<Show[]>;
    getByName(name: string): Promise<Show>;
    private build;
}
declare const _default: ShowService;
export default _default;
