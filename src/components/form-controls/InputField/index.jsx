import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.string,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    const hasError = formState.touchedFields && formState.errors[name];

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <TextField 
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    disabled={disabled}
                    error={!!hasError}
                    helperText={formState.errors[name]?.message}
                />
                
            )}

        />
    );
}

export default InputField;