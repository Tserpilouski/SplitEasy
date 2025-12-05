import { Link } from 'react-router';
import { ArrowRight, Wallet } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { LoginValidationRules } from '@/lib/validations/auth.validation';
import { type LoginForm } from '@/types/auth.types';
import { loginDefaultValues } from '@/lib/validations/auth.validation';
import { useEffect } from 'react';

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<LoginForm>({ defaultValues: loginDefaultValues });

    const login: SubmitHandler<LoginForm> = (data) => {
        console.log(data);
    };

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);
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
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground">Вход в аккаунт</h2>
                    <p className="text-muted-foreground mt-2">Введите свои данные для входа</p>
                </div>
                <div className="w-1/2 mx-auto shadow-lg p-10 rounded-xl">
                    <form className="space-y-5" onSubmit={handleSubmit(login)}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
                                Email
                            </label>
                            <input
                                className="border border-gray-400 rounded-sm "
                                type="text"
                                placeholder="example@gmail.com"
                                {...register('email', LoginValidationRules.email)}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                className="border border-gray-400 rounded-sm "
                                type="password"
                                placeholder="****"
                                {...register('password', LoginValidationRules.password)}
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            <div className="flex justify-center items-center gap-2">
                                <span>LogIn</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </button>
                    </form>
                </div>
                <p className="text-center mt-6 text-muted-foreground">
                    Нет аккаунта?
                    <Link to="/signup" className="text-primary font-medium hover:underline" data-testid="link-signup">
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
