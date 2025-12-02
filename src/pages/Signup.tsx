import { Controller, useForm } from 'react-hook-form';
import type { SignupForm } from '@/types/auth.types';
import { signupDefaultValues, signupValidationRules } from '@/lib/validations/auth.validation';

const Signup = () => {
    const { register, handleSubmit, formState, control } = useForm<SignupForm>({
        mode: 'onChange',
        defaultValues: signupDefaultValues,
    });

    const { errors } = formState;

    const onSubmit = (data: SignupForm) => {
        console.log(data);
    };

    return (
        <div>
            <form className="w-1/4 flex flex-col gap-4 m-auto bg-blue-400" onSubmit={handleSubmit(onSubmit)}>
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
                    type="text"
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
                            <input type="checkbox" id="agreeToTerms" checked={field.value} onChange={field.onChange} />
                            <label htmlFor="agreeToTerms">I agree to the terms and conditions</label>
                        </div>
                    )}
                />
                {errors.agreeToTerms?.message && <p className="text-red-800">{errors.agreeToTerms.message}</p>}

                <button className="bg-purple-400" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
