import { VALIDATION_MESSAGES } from '@/constants/validation.constants';
import type { EventForm } from '@/types/event.types';

export const EventValidationRules = {
    title: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
    },
};

export const eventDefaultValues: EventForm = {
    title: '',
    description: '',
    currency: 'USD',
};
