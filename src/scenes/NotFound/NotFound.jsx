import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { Grid, makeStyles, Paper, Container } from '@material-ui/core';

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