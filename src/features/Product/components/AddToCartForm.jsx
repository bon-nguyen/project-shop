import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import QuantityField from '../../../components/form-controls/QuantityField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {
    const scheme = yup.object().shape({
        quantity: yup.number().required('Please entet quantity').min(1,'Minimu value is 1').typeError('Please enter a number'),
    });
    const form = useForm({
        defaultValues:{
            quantity: 1,
        },
        resolver: yupResolver(scheme),
    });

    const handleSubmit = async (values) =>{
        if(onSubmit){
           await onSubmit(values);
        }
    }

    return (
        <Box>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" label="Quantity" form={form}/>
                <Button
                    type="submit"
                    style={{width: '250px'}}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Buy
                </Button>
            </form>
        </Box>
    );
}

export default AddToCartForm;