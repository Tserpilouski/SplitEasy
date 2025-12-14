import NavItem from '@/models/NavItem';
import { EnumBase } from './EnumBase';

export default class EnumMainRoutes extends EnumBase {
    getClassName(): string {
        return 'EnumMainRoutes';
    }

    static readonly HOME = new NavItem('/', 'Home');
    static readonly LOGIN = new NavItem('/login', 'LogIn');
    static readonly SIGNUP = new NavItem('/signup', 'SignUp');
    static readonly DASHBOARD = new NavItem('/dashboard', 'Dashboard');
}
