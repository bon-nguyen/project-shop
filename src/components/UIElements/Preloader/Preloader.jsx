import React from 'react';
import {Box, makeStyles, LinearProgress} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    root: {
        position: 'relative',
    },
    loading: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '999',
    },
    
}))
function Preloader(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <LinearProgress className={classes.loading} />
        </Box>
    );
}

export default Preloader;