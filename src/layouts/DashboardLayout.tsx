import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div className="flex min-h-screen">
            {/* Sidebar - фиксированная ширина */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main content - сдвигается когда sidebar открыт */}
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}
            >
                <header className="p-4 border-b">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Open menu
                    </button>
                </header>

                <main className="flex-1">
                    <Outlet />
                </main>

                <footer className="py-8 border-t mt-20">
                    <div className="text-center text-muted-foreground">
                        <p>© 2024 SplitEasy. Все права защищены.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DashboardLayout;
