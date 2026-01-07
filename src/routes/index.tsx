import { Routes, Route } from 'react-router';
import HomeLayout from '@/layouts/HomeLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import EnumMainRoutes from '@/enums/EnumMainRoutes';
import EnumDashboardRoutes from '@/enums/EnumDashboardRoutes';
import Friends from '@/pages/Friends';

export function AppRoutes() {
    const mainRoutes = EnumMainRoutes;
    const dashboardRoutes = EnumDashboardRoutes;

    return (
        <Routes>
            <Route path={mainRoutes.HOME.path} element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path={mainRoutes.LOGIN.path} element={<Login />} />
            <Route path={mainRoutes.SIGNUP.path} element={<Signup />} />
            <Route path={mainRoutes.DASHBOARD.path} element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path={dashboardRoutes.getFullPath(dashboardRoutes.FRIENDS)} element={<Friends />} />
                <Route path={dashboardRoutes.getFullPath(dashboardRoutes.STATISTICS)} element={<div>Statistics</div>} />
                <Route path={dashboardRoutes.getFullPath(dashboardRoutes.SETTINGS)} element={<div>Settings</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
