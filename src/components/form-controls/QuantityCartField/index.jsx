import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, makeStyles, OutlinedInput , IconButton, Box, Typography} from '@material-ui/core';
import {RemoveCircleOutline, AddCircleOutline} from '@material-ui/icons';

QuantityCartField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles( (theme)=> ({
    root: {},

    box: {  
       maxWidth: '70px',
    },

}))

function QuantityCartField(props) {
    const classes = useStyles();
    const { form, name, disabled, label } = props;
    const { formState, setValue } = form;
    const hasError = formState.touchedFields && formState.errors[name];

    return (
          <Controller
            control={form.control}
            name={name}
         
            render={({  field: { onChange, value } }) => (
                <OutlinedInput
                    id={name}
                    type="number"
                    onChange={onChange}
                    value={value}
                    disabled ={disabled}
                    error={!!hasError}
                    className={classes.box}
                />
            )}
         />

    );
}

export default QuantityCartField;