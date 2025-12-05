export const VALIDATION_PATTERNS = {
    EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/,
} as const;

export const VALIDATION_CONSTRAINTS = {
    NAME_MIN_LENGTH: 5,
    PASSWORD_MIN_LENGTH: 8,
} as const;

export const VALIDATION_MESSAGES = {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Invalid email address',
    INVALID_PASSWORD: 'Invalid password',
    NAME_TOO_SHORT: `Name must be at least ${VALIDATION_CONSTRAINTS.NAME_MIN_LENGTH} characters`,
    PASSWORD_TOO_SHORT: `Password must be at least ${VALIDATION_CONSTRAINTS.PASSWORD_MIN_LENGTH} characters`,
    AGREE_TO_TERMS: 'You must agree to terms and conditions',
} as const;
