import React from 'react';
import { Link } from 'react-router';
import EnumDashboardRoutes from '@/enums/EnumDashboardRoutes';
import NavItem from '@/models/NavItem';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const navItems = EnumDashboardRoutes.getAll<NavItem>();

    return (
        <aside
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 w-64 z-50 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">
                    ×
                </button>
            </div>

            <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={EnumDashboardRoutes.getFullPath(item.path)}
                        onClick={onClose}
                        className="px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
