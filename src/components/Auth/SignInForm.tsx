import React from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Divider,
  Grid,
  FormLabel,
} from '@mui/material';
import { GoogleIcon } from '../../assets/CustomIcons/GoogleIcon';
import { FacebookIcon } from '../../assets/CustomIcons/FacebookIcon';

const SignInForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: data.get('remember'),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 2,
        px: 4,
        py: 5,
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom align="center">
        Sign in
      </Typography>
      <FormLabel htmlFor='email' sx={{ color:"white" }}>Email</FormLabel>
      <TextField
        fullWidth
        margin="normal"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
        sx={{
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color-secondary)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color)',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color)',
            },
            '& .MuiOutlinedInput-input' : {
                color: '#fff !important'
            }
        }}
      />

      <FormLabel htmlFor='password' sx={{ color:"white" }}>Password</FormLabel>
      <TextField
        fullWidth
        margin="normal"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        sx={{
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color-secondary)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color)',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid var(--divider-border-color)',
            },
            '& .MuiOutlinedInput-input' : {
                color: '#fff !important'
            }
        }}
      />

      <FormControlLabel
        control={<Checkbox name="remember" color="primary" sx={{ color: 'var(--divider-border-color)' }} />}
        label="Remember me"
        sx={{ mt: 1, color: '#fff' }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#f0f6fc',
          color: '#0d1117',
          fontWeight: 600,
          '&:hover': { backgroundColor: '#dce3eb' },
        }}
      >
        Sign in
      </Button>

      <Box textAlign="center" mt={2}>
        <Link href="#" variant="body2" underline="hover" color="inherit">
          Forgot your password?
        </Link>
      </Box>

      <Divider sx={{ my: 3, borderColor: '#30363d' }}>or</Divider>

      <Grid container spacing={1}>
        <Grid item xs={12} width={'100%'}>
          <Button
            fullWidth
            startIcon={<GoogleIcon />}
            variant="outlined"
            sx={{
              borderColor: '#30363d',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#21262d' },
            }}
          >
            Sign in with Google
          </Button>
        </Grid>
        <Grid item xs={12} width={'100%'}>
          <Button
            fullWidth
            startIcon={<FacebookIcon />}
            variant="outlined"
            sx={{
              borderColor: '#30363d',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#21262d' },
            }}
          >
            Sign in with Facebook
          </Button>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={3}>
        <Typography variant="body2" color="textSecondary">
          Don't have an account?{' '}
          <Link href="#" underline="hover" color="inherit">
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignInForm;
