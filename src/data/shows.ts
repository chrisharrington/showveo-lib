import BaseService from './base';

import Config from '../config';
import { Show } from '../models';

class ShowService extends BaseService {
    async getAll() : Promise<Show[]> {
        const data = await this.get(`${Config.ApiUrl}/shows/all`);
        return data.map(this.build);
    }

    async getByName(name: string) : Promise<Show> {
        return this.build(await this.get(`${Config.ApiUrl}/shows/${name}`));
    }

    private build(data: any) : Show {
        const show = new Show();
        Object.keys(data).forEach(k => show[k] = data[k]);
        return show;
    }
}

export default new ShowService();