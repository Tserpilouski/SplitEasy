import { VALIDATION_CONSTRAINTS, VALIDATION_MESSAGES, VALIDATION_PATTERNS } from '@/constants/validation.constants';
import { type LoginForm, type SignupForm } from '@/types/auth.types';

export const signupValidationRules = {
    name: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
        minLength: {
            value: VALIDATION_CONSTRAINTS.NAME_MIN_LENGTH,
            message: VALIDATION_MESSAGES.NAME_TOO_SHORT,
        },
    },
    email: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
        pattern: {
            value: VALIDATION_PATTERNS.EMAIL,
            message: VALIDATION_MESSAGES.INVALID_EMAIL,
        },
    },
    agreeToTerms: {
        required: VALIDATION_MESSAGES.AGREE_TO_TERMS,
    },
} as const;

export const LoginValidationRules = {
    email: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
        pattern: {
            value: VALIDATION_PATTERNS.EMAIL,
            message: VALIDATION_MESSAGES.INVALID_EMAIL,
        },
    },
    password: {
        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
    },
};

export const signupDefaultValues: SignupForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'male',
    agreeToTerms: false,
};

export const loginDefaultValues: LoginForm = {
    email: '',
    password: '',
};
