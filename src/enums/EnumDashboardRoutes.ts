import { EnumBase } from './EnumBase';
import NavItem from '../models/NavItem';
import EnumMainRoutes from './EnumMainRoutes';

export default class EnumDashboardRoutes extends EnumBase {
    getClassName(): string {
        return 'EnumDashboardRoutes';
    }

    static readonly EVENTS = new NavItem('', 'Events', 'calendar');
    static readonly FRIENDS = new NavItem('/friends', 'Friends', 'users');
    static readonly STATISTICS = new NavItem('/statistics', 'Statistics', 'chart');
    static readonly SETTINGS = new NavItem('/settings', 'Settings', 'settings');

    static getFullPath(navItem: NavItem | string): string {
        if (typeof navItem === 'string') {
            return EnumMainRoutes.DASHBOARD.path + navItem;
        } else {
            return EnumMainRoutes.DASHBOARD.path + navItem.path;
        }
    }
}
