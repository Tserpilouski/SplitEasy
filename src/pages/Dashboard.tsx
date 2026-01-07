import EventDialog from '@/components/EventDialog';
import { useState } from 'react';
import type { EventForm } from '@/types/event.types';
import Button from '@/components/ui/Button';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [events, setEvents] = useState<EventForm[]>([]);

    const handleAddEvent = (newEvent: EventForm) => {
        setEvents((prev) => [...prev, newEvent]);
        setIsOpen(false);
    };

    return (
        <div className="p-4">
            <div className="flex gap-4 mb-4">
                {events.map((event, index) => (
                    <div className="p-2 border-4 border-blue-600" key={index}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <span>{event.currency}</span>
                    </div>
                ))}
            </div>
            <Button onClick={() => setIsOpen(true)}>new Event</Button>
            <EventDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onAdd={handleAddEvent} />
        </div>
    );
};

export default Dashboard;
