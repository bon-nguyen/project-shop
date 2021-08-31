import React from 'react';
import PropTypes from 'prop-types';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/form-controls/InputField';
import { Button } from '@material-ui/core';


RegisterForm.propTypes = {
    onSubmit:PropTypes.func,
};


const schema = yup.object().shape({
    title: yup.string().required('Please enter title'),
});
function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputField name="title" form={form} />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
    );
}

export default RegisterForm;