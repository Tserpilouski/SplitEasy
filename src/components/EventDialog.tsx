import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormTextField from './common/FormTextField';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import type { EventForm } from '@/types/event.types';
import { eventDefaultValues, EventValidationRules } from '@/lib/validations/event.validation';
import { useEffect, useMemo } from 'react';
import cc from 'currency-codes';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from './ui/Button';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: EventForm) => void;
}

const EventDialog: React.FC<Props> = ({ isOpen, onClose, onAdd }) => {
    const {
        register,
        handleSubmit,
        setFocus,
        control,
        formState: { errors },
    } = useForm<EventForm>({ defaultValues: eventDefaultValues });
    const currency = useMemo(() => cc.codes(), []);

    const addEvent: SubmitHandler<EventForm> = (data) => {
        console.log(data);
        onAdd(data);
    };

    useEffect(() => {
        if (isOpen) {
            console.log(cc.codes());
            setFocus('title');
        }
    }, [isOpen, setFocus]);

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Create event</DialogTitle>
            <DialogContent>
                <form className="flex flex-col m-2" onSubmit={handleSubmit(addEvent)}>
                    <FormTextField
                        type="text"
                        label="Event name"
                        placeholder="Example: Trip in Warsaw"
                        required
                        error={errors.title?.message}
                        register={register('title', EventValidationRules.title)}
                    />
                    <FormTextField
                        type="text"
                        label="Description"
                        placeholder="Describe your event..."
                        multiline
                        rows={4}
                        register={register('description')}
                    />
                    <Controller
                        name="currency"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Autocomplete
                                className="mb-4"
                                disablePortal
                                options={currency}
                                sx={{ width: 300 }}
                                value={value || null}
                                onChange={(_, newValue) => onChange(newValue)}
                                renderInput={(params) => <TextField {...params} type="text" label="Currency" />}
                            />
                        )}
                    />
                    <div className="flex gap-4">
                        <Button className="border-red-600 text-red-600" variant="outline" fullWidth onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="outline" fullWidth>
                            Add
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EventDialog;
