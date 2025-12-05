import { Routes } from 'react-router';
import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';

export function AppRoutes() {
    return (
        <Routes>
            <PublicRoutes />
            <PrivateRoutes />
        </Routes>
    );
}
