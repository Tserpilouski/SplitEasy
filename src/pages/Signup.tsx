import { Controller, useForm } from 'react-hook-form';
import type { SignupForm } from '@/types/auth.types';
import { signupDefaultValues, signupValidationRules } from '@/lib/validations/auth.validation';
import { Link, useNavigate } from 'react-router';
import { Wallet } from 'lucide-react';
import EnumMainRoutes from '@/enums/EnumMainRoutes';
import FormTextField from '@/components/ui/FormTextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { VALIDATION_MESSAGES } from '@/constants/validation.constants';

const Signup: React.FC = () => {
    const mainRoutes = EnumMainRoutes;
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState, control, trigger, watch } = useForm<SignupForm>({
        mode: 'onChange',
        defaultValues: signupDefaultValues,
    });

    const { errors } = formState;
    const password = watch('password');

    const handleNextStep = async () => {
        const fieldsToValidate = step === 1 ? ['name', 'email', 'agreeToTerms'] : [];
        const isValid = await trigger(fieldsToValidate as Array<keyof SignupForm>);
        if (isValid) {
            setStep(2);
        }
    };

    const handlePrevStep = () => {
        setStep(1);
    };

    const onSubmit = (data: SignupForm) => {
        console.log(data);
        navigate(mainRoutes.HOME.path);
    };

    return (
        <div className="min-h-screen w-full flex justify-between">
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 relative overflow-hidden">
                <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
                    <div className="max-w-md text-center">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Wallet className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-3xl font-bold">SplitEasy</span>
                        </div>

                        <h1 className="text-4xl font-bold mb-6">Split expenses easily</h1>
                        <p className="text-lg text-indigo-100 leading-relaxed">
                            Forget about complex calculations. Track expenses, split bills and know who owes whom —
                            all in one place.
                        </p>

                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold">10K+</div>
                                <div className="text-sm text-indigo-200">Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">50K+</div>
                                <div className="text-sm text-indigo-200">Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">1M+</div>
                                <div className="text-sm text-indigo-200">Expenses</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 right-12 w-32 h-32 bg-white/5 rounded-full" />
            </div>
            <div className="w-1/2 flex flex-col justify-center bg-white">
                <div className="w-1/2 mx-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {step === 1 ? 'Create account' : 'Complete registration'}
                        </h2>
                        <p className="text-gray-600 mt-2">Step {step} of 2</p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        {step === 1 ? (
                            <>
                                <FormTextField
                                    type="text"
                                    label="Name"
                                    placeholder="Kiryl Tserpilouski"
                                    required
                                    error={errors.name?.message}
                                    register={register('name', signupValidationRules.name)}
                                />
                                <FormTextField
                                    type="email"
                                    label="Email"
                                    placeholder="example@gmail.com"
                                    required
                                    error={errors.email?.message}
                                    register={register('email', signupValidationRules.email)}
                                />
                                <Controller
                                    name="agreeToTerms"
                                    control={control}
                                    rules={signupValidationRules.agreeToTerms}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={field.value}
                                                    onChange={field.onChange}
                                                    color="primary"
                                                />
                                            }
                                            label={
                                                <span>
                                                    I agree to the{' '}
                                                    <Link to="/" className="text-indigo-600 hover:underline">
                                                        terms of service
                                                    </Link>{' '}
                                                    and{' '}
                                                    <Link to="/" className="text-indigo-600 hover:underline">
                                                        privacy policy
                                                    </Link>
                                                </span>
                                            }
                                        />
                                    )}
                                />
                                {errors.agreeToTerms?.message && (
                                    <p className="text-red-600 text-sm">{errors.agreeToTerms.message}</p>
                                )}

                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Next
                                </button>
                            </>
                        ) : (
                            <>
                                <FormTextField
                                    type="password"
                                    label="Password"
                                    placeholder="Enter password"
                                    required
                                    error={errors.password?.message}
                                    register={register('password', signupValidationRules.password)}
                                />
                                <FormTextField
                                    type="password"
                                    label="Confirm Password"
                                    placeholder="Confirm password"
                                    required
                                    error={errors.confirmPassword?.message}
                                    register={register('confirmPassword', {
                                        required: VALIDATION_MESSAGES.REQUIRED_FIELD,
                                        validate: (value) =>
                                            value === password || VALIDATION_MESSAGES.PASSWORDS_DO_NOT_MATCH,
                                    })}
                                />
                                <FormTextField
                                    type="tel"
                                    label="Phone"
                                    placeholder="+375 29 123 45 67"
                                    required
                                    error={errors.phone?.message}
                                    register={register('phone', signupValidationRules.phone)}
                                />

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={handlePrevStep}
                                        className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
