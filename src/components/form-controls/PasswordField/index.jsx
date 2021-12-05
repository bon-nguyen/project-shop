import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.string,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    const hasError = formState.touchedFields && formState.errors[name];
    
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = ()=>{
        setShowPassword((x) => !x);
    }
    return (

        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel error={!!hasError} htmlFor={name}>{label}</InputLabel>
          <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={onChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            onMouseDown={toggleShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                        disabled ={disabled}
                        error={!!hasError}
                        
                    />
                    {!!hasError && (
                    <FormHelperText error id="accountId-error">
                       {formState.errors[name]?.message}
                    </FormHelperText>
            )}
                </>
            )}

         />
        </FormControl>
    );
}

export default PasswordField;