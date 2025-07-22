import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

interface CustomSelectProps extends Omit<SelectProps<unknown>, 'renderValue'> {
    placeholder?: string;
}

export const SelectFormControl = (props: CustomSelectProps) => {
    const { labelId, label, value, placeholder, ...selectProps } = props;

    return (
        <FormControl sx={{ minWidth: 200 }} data-testid="select-form-control">
            <InputLabel id={labelId}>{value ? label : placeholder}</InputLabel>
            <Select {...selectProps} />
        </FormControl>
    );
};