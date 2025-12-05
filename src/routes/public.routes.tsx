import { Route } from 'react-router';
import HomeLayout from '@/layouts/HomeLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

export function PublicRoutes() {
    return (
        <>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </>
    );
}
