import TextField, { type TextFieldProps } from '@mui/material/TextField';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormTextFieldProps extends Omit<TextFieldProps, 'error' | 'helperText' | 'variant' | 'size'> {
    error?: string;
    helperText?: string;
    register?: UseFormRegisterReturn;
}

const FormTextField: React.FC<FormTextFieldProps> = ({ error, helperText, register, ...textFieldProps }) => {
    const hasError = typeof error === 'string' && error.length > 0;
    const displayHelperText = hasError ? error : helperText || ' ';

    return (
        <TextField
            variant="outlined"
            size="small"
            error={hasError}
            helperText={displayHelperText}
            {...textFieldProps}
            {...register}
        />
    );
};

export default FormTextField;
