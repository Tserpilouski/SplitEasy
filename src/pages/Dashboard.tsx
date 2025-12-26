import Text from '@/components/ui/Text';
import SDialog from '@/components/SDialog';
import { useState } from 'react';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <div>Dashboard</div>
            <input type="text" />
            <Text as="h1" size="sm" variant="red">
                Hello World!
            </Text>
            <button onClick={() => setIsOpen(true)}>open dilog</button>
            <SDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Dashboard;
