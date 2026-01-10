import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { PanelLeftIcon } from 'lucide-react';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div className="flex min-h-screen">
            {/* Sidebar - fixed width */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main content - shifts when sidebar is open */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <header className="p-4 border-b border-gray-200">
                    <button
                        onClick={(e) => {
                            setIsSidebarOpen(!isSidebarOpen);
                            e.currentTarget.blur();
                        }}
                        className="p-2 text-gray-500 rounded-4xl hover:bg-gray-100"
                    >
                        <PanelLeftIcon />
                    </button>
                </header>

                <main className="flex-1">
                    <Outlet />
                </main>

                <footer className="py-8 border-t mt-20">
                    <div className="text-center text-muted-foreground">
                        <p>© 2024 SplitEasy. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DashboardLayout;
