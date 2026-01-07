import { VALIDATION_MESSAGES } from '@/constants/validation.constants';
import type { FriendForm } from '@/types/friend.types';

export const FriendValidationRules = {
    name: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
    },
    phone: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
    },
    email: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
    },
};

export const friendDefaultValues: FriendForm = {
    name: '',
    phone: '',
    email: '',
    telegram: '',
};
