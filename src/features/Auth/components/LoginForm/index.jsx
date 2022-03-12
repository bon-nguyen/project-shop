import React from 'react';
import PropTypes from 'prop-types';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/form-controls/InputField';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PasswordField from '../../../../components/form-controls/PasswordField';


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root:{
        position: 'relative',
        paddingTop: theme.spacing(3),
    },
    avatar: {
      margin: '0 auto',
      marginTop: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm(props) {
    const classes = useStyles();
    const scheme = yup.object().shape({
        identifier: yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: yup.string().min(6).max(255).required('Password is required'),
    });
    const form = useForm({
        defaultValues:{
            identifier: '',
            password: '',
        },
        resolver: yupResolver(scheme),
    });

    const handleSubmit = async (values) =>{
        const {onSubmit} = props;
        if(onSubmit){
           await onSubmit(values);
        }
    }

    const {isSubmitting} = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress />}
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} labelWidth={70} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                >
                Login
            </Button>
            </form>
        </div>
    );
}

export default LoginForm;