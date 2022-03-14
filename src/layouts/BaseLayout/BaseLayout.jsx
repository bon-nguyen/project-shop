import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {Box , makeStyles} from '@material-ui/core';

BaseLayout.propTypes = {
    children: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {

    },
    main: {

    }
}));

function BaseLayout({children}) {
    const classes = useStyles

    return (
        <Box className={classes.root}>
            <Header />
            <Box className={classes.main}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default BaseLayout;