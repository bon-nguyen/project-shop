import React from 'react';
import { Link as LinkM, makeStyles } from '@material-ui/core';
import { Link as LinkR } from 'react-router-dom'
import logoImg from'./../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        flexBasis: '160px',
        flexShrink: '0',
        marginRight: '16px',

        '& > img': {
            width: '60px',
            height: '40px',
            display: 'block',
        }
    },

}));
function Logo(props) {
    const classes = useStyles();
    return (
        <LinkM component={LinkR} to='/' className={classes.root}>
            <img src={logoImg} alt="Logo" />
        </LinkM>

    );
}

export default Logo;