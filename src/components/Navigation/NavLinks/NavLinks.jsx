import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { Link as LinkR} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        listStyleType: 'none',
        padding: '0px 0px',
        margin: '0',
        display: 'flex',

        '& > li': {
            paddingRight: '8px',


        }
    },


}));

const NavLinks = () => {
    const classes = useStyles();

    return (
        <Box component='ul' className={classes.root}>
            <li> 
                <Button component={LinkR} to='/' color='inherit' size="medium" >Trang chủ</Button>
            </li>
            <li> 
                <Button component={LinkR} to='/products' color='inherit' size="medium">Sản phẩm</Button>
            </li>
        </Box>
    );
};

export default NavLinks;