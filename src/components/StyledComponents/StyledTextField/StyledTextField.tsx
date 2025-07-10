import { styled } from '@mui/material/styles';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px !important',
        color: 'var(--text-main) !important',
        borderColor: 'var(--divider-border-color) !important',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'unset !important',
    },
    '& .MuiFormLabel-root': {
        color: 'var(--color-main) !important',
    },
    '& .MuiInputBase-input': {
        color: 'var(--text-main) !important',
    },
});

export default function StyledTextField({
    ...props
}: TextFieldProps) {
    return <CssTextField {...props} />;
}