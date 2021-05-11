export default class BaseService {
    get(url: string, params?: any): Promise<any>;
    post(url: string, params?: any, headers?: any): Promise<Response>;
}
