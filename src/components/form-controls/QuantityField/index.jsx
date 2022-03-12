import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, makeStyles, OutlinedInput , IconButton, Box, Typography} from '@material-ui/core';
import {RemoveCircleOutline, AddCircleOutline} from '@material-ui/icons';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles( (theme)=> ({
    root: {},

    box: {  
       maxWidth: '200px',
       display: 'flex',
       flexFlow: 'row nowrap',
       alignItems: 'center',
    },
    
    error: {
        marginLeft: '50px'
    }
}))

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, disabled, label } = props;
    const { formState, setValue } = form;
    const hasError = formState.touchedFields && formState.errors[name];

    return (
        
        <FormControl error={!!hasError} fullWidth margin="normal" variant="outlined">
          <Typography style={{paddingLeft: '50px'}} htmlFor={name}>{label}</Typography>
          <Controller
            control={form.control}
            name={name}
            render={({  field: { onChange, value } }) => (
                <>
                <Box className={classes.box}>  
                    <IconButton onClick={ () => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                        <RemoveCircleOutline />
                    </IconButton>
                    <OutlinedInput
                        id={name}
                        type="number"
                        onChange={onChange}
                        value={value}
                        disabled ={disabled}
                        error={!!hasError}
                        
                    />
                    <IconButton onClick={ () => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                        <AddCircleOutline />
                    </IconButton>
                </Box>
                {!!hasError && (
                    <FormHelperText className={classes.error} error id={name}>
                    {formState.errors[name]?.message}
                    </FormHelperText>
                )}
                </>
            )}
         />
        </FormControl>
    );
}

export default QuantityField;