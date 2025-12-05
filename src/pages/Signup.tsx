import { Controller, useForm } from 'react-hook-form';
import type { SignupForm } from '@/types/auth.types';
import { signupDefaultValues, signupValidationRules } from '@/lib/validations/auth.validation';
import { Link } from 'react-router';
import { Wallet } from 'lucide-react';

const Signup: React.FC = () => {
    const { register, handleSubmit, formState, control } = useForm<SignupForm>({
        mode: 'onChange',
        defaultValues: signupDefaultValues,
    });

    const { errors } = formState;

    const onSubmit = (data: SignupForm) => {
        console.log(data);
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

                        <h1 className="text-4xl font-bold mb-6">Делите расходы просто</h1>
                        <p className="text-lg text-indigo-100 leading-relaxed">
                            Забудьте о сложных расчётах. Отслеживайте траты, делите счета и знайте, кто кому должен —
                            всё в одном месте.
                        </p>

                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold">10K+</div>
                                <div className="text-sm text-indigo-200">Пользователей</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">50K+</div>
                                <div className="text-sm text-indigo-200">Событий</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">1M+</div>
                                <div className="text-sm text-indigo-200">Расходов</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 right-12 w-32 h-32 bg-white/5 rounded-full" />
            </div>
            <div className="w-1/2 flex flex-col justify-center bg-white">
                <div className="w-1/2">
                    <form className="flex flex-col gap-4 m-auto bg-blue-400" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input
                            className="border"
                            type="text"
                            placeholder="Kiryl Tserpilouski"
                            {...register('name', signupValidationRules.name)}
                        />
                        {errors.name?.message && <p className="text-red-800">{errors.name.message}</p>}

                        <label htmlFor="email">Email</label>
                        <input
                            className="border"
                            type="email"
                            placeholder="example@gmail.com"
                            {...register('email', signupValidationRules.email)}
                        />
                        {errors.email?.message && <p className="text-red-800">{errors.email.message}</p>}

                        <Controller
                            name="agreeToTerms"
                            control={control}
                            rules={signupValidationRules.agreeToTerms}
                            render={({ field }) => (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="agreeToTerms"
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                    <label htmlFor="agreeToTerms">
                                        Я согласен с
                                        <Link to="/" className="text-indigo-600 hover:underline">
                                            условиями использования
                                        </Link>
                                        <Link to="/" className="text-indigo-600 hover:underline">
                                            политикой конфиденциальности
                                        </Link>
                                    </label>
                                </div>
                            )}
                        />
                        {errors.agreeToTerms?.message && <p className="text-red-800">{errors.agreeToTerms.message}</p>}

                        <button className="bg-purple-400" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
