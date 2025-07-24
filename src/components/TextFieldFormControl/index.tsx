import { FormControl, TextField, TextFieldProps } from '@mui/material';

export const TextFieldFormControl = (props: TextFieldProps) => {
    return (
        <FormControl sx={{ minWidth: 120 }} data-testid="property-field-form-control">
            <TextField {...props} />
        </FormControl>
    );
};
