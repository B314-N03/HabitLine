import { styled } from '@mui/material/styles';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '&.MuiFormControl-root-MuiTextField-root': {
        margin: '0 !important',
    },
    '&.MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '8px !important',
        color: 'var(--text-main) !important',
        borderColor: 'var(--divider-border-color) !important',

    },
    '&.MuiFormLabel-root-MuiInputLabel-root': {
        color: 'var(--text-main) !important',
    }
});

export default function StyledTextField({
    ...props
}: TextFieldProps) {
    return <CssTextField {...props}/>;
}