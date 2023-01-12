import { useState, memo } from 'react';

// Yup && React-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Material UI
import { Alert, Box, Button, CircularProgress } from '@mui/material';

// Project Import
import InputField from './form-fields/InputField';

// ==============================|| CONTENT FORM - VALIDATE + SUBMIT  ||============================== //

interface ContentProps {
    onSubmit?: (formValues: any) => void;
}

export interface FormValues {
    author: String;
    description: String;
    comment: String;
}

const schema = yup
    .object({
        author: yup.string().trim().min(5).max(1000).required('Please enter name of author'),
        description: yup
            .string()
            .trim()
            .min(5)
            .max(1000)
            .required('Please write some descriptions'),
        comment: yup.string().trim().min(5).max(1000).required('Please comment something'),
    })
    .required();

const Content = ({ onSubmit }: ContentProps) => {
    const [error, setError] = useState<string>('');

    const { control, handleSubmit, reset } = useForm<any>({
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = (formValues: FormValues) => {
        try {
            // clear previous submission error
            setError('');

            onSubmit?.(formValues);
            reset(
                {
                    author: '',
                    description: '',
                    comment: '',
                },
                {
                    keepErrors: true,
                    keepDirty: true,
                }
            );
        } catch (error: any) {
            console.log('Failed to update/add any', error);
            setError(error.message as string);
        }
    };

    const handleClearInputFields = () => {
        reset(
            {
                author: '',
                description: '',
                comment: '',
            },
            {
                keepErrors: true,
                keepDirty: true,
            }
        );
    };

    return (
        <Box maxWidth={400}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField name="author" control={control as any} label="Author" />
                <InputField
                    name="description"
                    control={control as any}
                    label="Description"
                    multiline={true}
                    rows={5}
                />
                <InputField
                    name="comment"
                    control={control as any}
                    label="Comment"
                    multiline={true}
                    rows={4}
                />

                {error && <Alert severity="error">{error}</Alert>}

                <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#002366' }}>
                        Add
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={handleClearInputFields}
                        sx={{ backgroundColor: '#002366' }}
                    >
                        Clear
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default memo(Content);
