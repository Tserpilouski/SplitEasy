import { EnumBase } from './EnumBase';
import NavItem from '../models/NavItem';

export default class EnumDashboardRoutes extends EnumBase {
    getClassName(): string {
        return 'EnumDashboardRoutes';
    }

    static readonly EVENTS = new NavItem('/dashboard', 'Events', 'calendar');
    static readonly FRIENDS = new NavItem('/friends', 'Friends', 'users');
    static readonly STATISTICS = new NavItem('/statistics', 'Statistics', 'chart');
    static readonly SETTINGS = new NavItem('/settings', 'Settings', 'settings');

    static getPaths(): string[] {
        return this.getAll<NavItem>().map((item) => item.path);
    }

    static getLabels(): string[] {
        return this.getAll<NavItem>().map((item) => item.label);
    }
}
