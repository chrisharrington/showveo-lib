import { User } from '../models';
import BaseService from './base';
declare class AuthService extends BaseService {
    signIn(email: string, password: string): Promise<User | null>;
    isAuthorized(token: string): Promise<boolean>;
}
declare const _default: AuthService;
export default _default;
