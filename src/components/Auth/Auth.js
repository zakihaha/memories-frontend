import React, { useState } from 'react';
import useStyles from './styles'

import { Container, Avatar, Typography, Grid, Button, Paper } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Input from './Input'

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    const submitHandler = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    
    const switchMode = () => setIsSignup((prevIsSignUp) => !prevIsSignUp)

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" type='text' handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" type='text' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Addres' type='email' handleChange={handleChange} />
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;