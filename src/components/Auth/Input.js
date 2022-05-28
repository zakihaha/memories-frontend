import React from 'react';

import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Input = ({ name, label, type, handleChange, autoFocus, handleShowPassword, half }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                label={label}
                type={type}
                name={name}
                onChange={handleChange}
                variant='outlined'
                required
                fullWidth
                autoFocus={autoFocus}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Grid>
    );
};

export default Input;