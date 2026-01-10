import EventStatus from '@/models/EventStatus';
import { EnumBase } from './EnumBase';

export default class EnumEventStatus extends EnumBase {
    getClassName(): string {
        return 'EnumEventStatus';
    }

    static readonly ALL = new EventStatus('all', 'All');
    static readonly ACTIVE = new EventStatus('active', 'Active');
    static readonly CLOSE = new EventStatus('close', 'Close');
}
