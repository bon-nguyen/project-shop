import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';


Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            // Auto set username equal email
            values.username = values.email;
            
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("Form submit: ", user);
        } catch (error) {
            console.log('Failt to register:', error);
        }
    }
    return (
        <>
            <RegisterForm onSubmit={handleSubmit}/>
        </>
    );
}

export default Register;