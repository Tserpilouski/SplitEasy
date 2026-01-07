import FriendDialog from '@/components/FriendDialog';
import Button from '@/components/ui/Button';
import type { FriendForm } from '@/types/friend.types';
import { useState, type FC } from 'react';

const Friends: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [friends, setEvents] = useState<FriendForm[]>([]);

    const handleAddEvent = (newEvent: FriendForm) => {
        setEvents((prev) => [...prev, newEvent]);
        setIsOpen(false);
    };

    return (
        <div className="p-4">
            <div className="flex gap-4 mb-4">
                {friends.map((friend, index) => (
                    <div className="p-2 border-4 border-blue-600" key={index}>
                        <h3>{friend.name}</h3>
                        <span>{friend.email}</span>
                    </div>
                ))}
            </div>
            <Button onClick={() => setIsOpen(true)}>new Friend</Button>
            <FriendDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onAdd={handleAddEvent} />
        </div>
    );
};

export default Friends;
