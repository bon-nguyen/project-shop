import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Input from "@material-ui/core/Input";
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    disabled: false,
}
function InputField(props) {
    const {form, name, label, disabled } = props;
    const {formState} = form;
    console.log("Form", form);
    const hasErrors = formState.touchedFields[name] && formState.errors[name];
    return (
        <Controller
        name={name}
        control={form.control}
        render={({ field }) => <TextField {...field} />}
        
        fullWidth
        disabled={disabled}
        label={label}
      />
    );
}


export default InputField;