import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ImageError from '../../assets/images/mascot_404.png';
import { Box, Grid, makeStyles, Paper, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));
  
const NotFound = () => {
    const classes = useStyles();
    return (
        <BaseLayout>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container >
                        <Grid item xs>
                            <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </BaseLayout>
    );
};

export default NotFound;