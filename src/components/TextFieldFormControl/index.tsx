import { FormControl, TextField, TextFieldProps } from '@mui/material';

interface TextFieldFormControlProps {
    props: TextFieldProps;
}

export const TextFieldFormControl = ({ props }: TextFieldFormControlProps) => {
    return (
        <FormControl sx={{ minWidth: 120 }} data-testid="property-field-form-control">
            <TextField {...props} />
        </FormControl>
    );
};
