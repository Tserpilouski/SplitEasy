import EventDialog from '@/components/EventDialog';
import React, { useState } from 'react';
import type { EventForm } from '@/types/event.types';
import Button from '@/components/ui/Button';
import { Plus, Search } from 'lucide-react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import EnumEventStatus from '@/enums/EnumEventStatus';
import type EventStatus from '@/models/EventStatus';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [events, setEvents] = useState<EventForm[]>([]);
    const [eventStatus, setEventStatus] = useState(EnumEventStatus.ALL.value);

    const handleAddEvent = (newEvent: EventForm) => {
        setEvents((prev) => [...prev, newEvent]);
        setIsOpen(false);
    };

    const handleChangeEventStatus = (event: React.MouseEvent<HTMLElement>, eventStatus: string) => {
        if (eventStatus != null) {
            console.log(eventStatus);
            setEventStatus(eventStatus);
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">My Events</h2>
                <Button onClick={() => setIsOpen(true)}>
                    <Plus />
                    Add Event
                </Button>
            </div>
            <div className="flex justify-between content-center">
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Find events..."
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <ToggleButtonGroup
                    color="primary"
                    size="small"
                    value={eventStatus}
                    exclusive
                    onChange={handleChangeEventStatus}
                    aria-label="Platform"
                >
                    {EnumEventStatus.getAll<EventStatus>().map((status) => (
                        <ToggleButton key={status.value} value={status.value}>
                            {status.statusName}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div className="flex gap-4 mb-4">
                {events.map((event, index) => (
                    <div className="p-2 border-4 border-blue-600" key={index}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <span>{event.currency}</span>
                    </div>
                ))}
            </div>
            <EventDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onAdd={handleAddEvent} />
        </div>
    );
};

export default Dashboard;
