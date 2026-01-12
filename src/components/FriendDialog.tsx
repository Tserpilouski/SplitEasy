import type { FriendForm } from '@/types/friend.types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, type FC } from 'react';
import Button from './ui/Button';
import FormTextField from './common/FormTextField';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { friendDefaultValues, FriendValidationRules } from '@/lib/validations/friend.validation';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: FriendForm) => void;
}

const FriendDialog: FC<Props> = ({ isOpen, onClose, onAdd }) => {
    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<FriendForm>({ defaultValues: friendDefaultValues });

    const addFriend: SubmitHandler<FriendForm> = (data) => {
        onAdd(data);
    };

    useEffect(() => {
        if (isOpen) {
            setFocus('name');
        }
    }, [isOpen, setFocus]);
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Add friend</DialogTitle>
            <DialogContent>
                <form className="flex flex-col m-2" onSubmit={handleSubmit(addFriend)}>
                    <FormTextField
                        type="text"
                        label="Name"
                        placeholder="Kiryl"
                        required
                        error={errors.name?.message}
                        register={register('name', FriendValidationRules.name)}
                    />
                    <FormTextField
                        type="text"
                        label="Phone"
                        placeholder="+375-29-22-56-409"
                        required
                        error={errors.phone?.message}
                        register={register('phone')}
                    />
                    <FormTextField
                        type="text"
                        label="Email"
                        placeholder="example@gmail.com"
                        required
                        error={errors.email?.message}
                        register={register('email')}
                    />
                    <FormTextField type="text" label="Telegram" placeholder="@example" />
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

export default FriendDialog;
