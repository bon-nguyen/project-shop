import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';
import { useSnackbar } from 'notistack';


Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            // Auto set username equal email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            // close dialog 
            const { closeDialog } = props;
            if(closeDialog){
                closeDialog();
            }
            // do something here on register successfully
            enqueueSnackbar('Register successfully.', { variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error'});
        }
    }
    return (
        <>
            <RegisterForm onSubmit={handleSubmit}/>
        </>
    );
}

export default Register;