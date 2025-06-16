import { styled } from '@mui/material/styles';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '&.MuiFormControl-root-MuiTextField-root': {
        margin: '0 !important',
    }
});

export default function StyledTextField({
    ...props
}: TextFieldProps) {
    return <CssTextField {...props}/>;
}