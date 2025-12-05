import { Route } from 'react-router';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';

export function PrivateRoutes() {
    return (
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
        </Route>
    );
}
