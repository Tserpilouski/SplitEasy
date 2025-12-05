export interface SignupForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: Gender;
    agreeToTerms: boolean;
}

export interface LoginForm {
    email: string;
    password: string;
}

export type Gender = 'female' | 'male';
