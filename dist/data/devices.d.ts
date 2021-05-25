import { Device, Castable } from '../models';
import BaseService from './base';
declare class DeviceService extends BaseService {
    getAll(): Promise<Device[]>;
    cast(castable: Castable): Promise<void>;
    pause(device: Device): Promise<void>;
    unpause(device: Device): Promise<void>;
    stop(device: Device): Promise<void>;
    seek(device: Device, time: number): Promise<void>;
    private build;
}
declare const _default: DeviceService;
export default _default;
