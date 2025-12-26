import { Link, Outlet } from 'react-router';
import { Split } from 'lucide-react';
import EnumMainRoutes from '@/enums/EnumMainRoutes';

const HomeLayout = () => {
    const mainRoutes = EnumMainRoutes;
    return (
        <>
            <header className="py-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Split className="w-8 h-8 text-primary" />
                    <h1 className="text-2xl font-bold">SplitEasy</h1>
                </div>
                <Link to={mainRoutes.LOGIN.path}>
                    <button>Login</button>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="py-8 border-t mt-20">
                <div className="text-center text-muted-foreground">
                    <p>© 2024 SplitEasy. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default HomeLayout;
