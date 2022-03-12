import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const useStyle = makeStyles( (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 0,
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2,4),


            '& > a': {
                color: theme.palette.grey[700],    
            },

            '& > a.active': {
                color: theme.palette.primary.main,
                textDecoration: 'underline',   
                fontWeight: '500',
            }
        }
    },


}))


function ProductMenu(props) {
    const classes = useStyle();
    const {url} = useRouteMatch();

    return (
        <Box component='ul' className={classes.root}>
            <li>
                <Link component={NavLink} to={url} exact>Description</Link>
            </li>
            <li>
                <Link component={NavLink}  to={`${url}/addtional`} exact>Additional Infonmation</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact>Review</Link>
            </li>
        </Box>
    );
}

export default ProductMenu;