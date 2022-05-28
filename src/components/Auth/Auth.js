import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login'

import { Container, Avatar, Typography, Grid, Button, Paper } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Icon from './Icon'
import Input from './Input'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submitHandler = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => setIsSignup((prevIsSignUp) => !prevIsSignUp)

    const googleSuccess = async (res) => {
        // console.log(res)
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type:'AUTH', data: {result, token}})
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was Unsuccessful. Try Again Later');
    }

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
                        {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId='998173041129-9bslnpnqck2bhipjt182fn6eq4gutavh.apps.googleusercontent.com'
                        // scope='https://www.googleapis.com/auth/user.birthday.read'
                        render={(renderProps) => (
                            <Button className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;