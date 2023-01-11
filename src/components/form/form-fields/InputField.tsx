import { InputHTMLAttributes, memo } from 'react';

// Material UI
import { TextField } from '@mui/material';

// React-hook-form
import { Control, useController } from 'react-hook-form';

// ==============================|| INPUT FIELD ||============================== //

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    multiline?: Boolean;
    rows?: number;
    label?: string;
}

const InputField = ({ name, control, label, multiline, rows, ...inputProps }: InputFieldProps) => {
    let {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <TextField
            fullWidth
            size="medium"
            margin="normal"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            variant="outlined"
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            inputProps={inputProps}
            multiline={multiline ? true : false}
            rows={`${rows}`}
        />
    );
};

export default memo(InputField);
