import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

interface CustomSelectProps extends Omit<SelectProps<unknown>, 'renderValue'> {
    placeholder?: string;
    value?: unknown;
}

export const SelectFormControl = (props: CustomSelectProps) => {
    const { labelId, label, value, placeholder, ...selectProps } = props;

    return (
        <FormControl sx={{ minWidth: 200 }} data-testid="select-form-control">
            <InputLabel data-testid={labelId}>{value ? label : placeholder}</InputLabel>
            <Select {...selectProps} value={value ?? ''} />
        </FormControl>
    );
};