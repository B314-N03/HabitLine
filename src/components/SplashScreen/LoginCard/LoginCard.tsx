import styles from './login_card.module.scss';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import StyledTextField from '../../StyledComponents/StyledTextField/StyledTextField';
import IconButtonHL from '../../Widgets/Buttons/IconButton';
import { useState } from 'react';
import { GitHub, Microsoft } from '@mui/icons-material';
import { GoogleIcon } from '../../../assets/CustomIcons/GoogleIcon';
import { useLogin, useRegister } from '../../../hooks/useAuth';


function LoginCard(props: any) {
   const [startRegistration, setStartRegistration] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const loginMethods = [
        { 
            icon: <GitHub />, 
            label: 'GitHub',
            color: '#1976d2'
        },
        { 
            icon: <GoogleIcon />,
            label: 'Google',
            color: '#333'
        },
        { 
            icon: <Microsoft />,
            label: 'Microsoft',
            color: '#db4437'
        },
    ];
    const handleClickRegister = () => {
        setStartRegistration(!startRegistration);
        navigator.vibrate(300);
    };

    const loginMutation = useLogin();
    const registerMutation = useRegister();

    const handleSubmit = () => {
      if (!email || !password) return;

      if (startRegistration) {
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        // Call register mutation if you have it:
        registerMutation.mutate({ email, password });
      } else {
        loginMutation.mutate({ email, password });
      }
    };
    return(
         <Card className={styles.loginCard} elevation={3} {...props}>
              <CardContent className={styles.loginCardContent}>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {startRegistration ? 'Sign Up' : 'Login'}
                </Typography>
                
                <StyledTextField 
                  label="Email"
                  variant="outlined"
                  fullWidth         
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}         
                />

                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                {startRegistration && (
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                )}
                <Button variant="contained" size="large" fullWidth onClick={handleSubmit} >
                  {startRegistration ? 'Sign Up' : 'Login'}
                </Button>
                <Typography variant="body2" color="text.secondary">
                  {startRegistration ? "Already have an account?" : "Don't have an account?"}
                  <Button variant='text' onClick={handleClickRegister}>
                    {startRegistration ? "Login" : "Sign Up"}
                  </Button>
                </Typography>

                {!startRegistration && <Typography variant="body2" color="text.secondary">
                  Forgot your password? 
                  <Button variant='text'>
                    Reset Password
                  </Button>
                </Typography>}

                <Typography variant="body2" color="text.secondary" >	
                    or continue with
                </Typography>
                <Box className={styles.loginMethods}>
                  {loginMethods.map((method, index) => (
                    <IconButtonHL
                      key={index}
                      variant="contained"
                      onClick={() => console.log(`Login with ${method.label}`)}
                      title={method.label}
                      icon={method.icon}
                      customClass= {styles.loginMethodButton}
                    />
                  ))}
                </Box>

              </CardContent>
            </Card>
    )
}

export default LoginCard;