import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Typography, makeStyles, IconButton, Paper  } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import Logo from '../Logo/Logo';


Footer.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        paddingBottom: '50px',

        [theme.breakpoints.up('md')]: {
            paddingTop: '75px',
            paddingBottom: '75px',
        },
    },
    copy: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.up('md')]: {
            justifyContent: 'start',
        },
    },
    list: {
        margin: '0',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',

        '& > li': {
            paddingLeft: theme.spacing(2),
        },

        [theme.breakpoints.up('md')]: {
            justifyContent: 'end',
        },

    },
    paper: {
        textAlign: 'center',
    },

    logo: { 

    },
    container: {

    }
}));

function Footer(props) {
    const classes = useStyles();
    return (
        <Paper elevation={0} component="footer" className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    <Grid item lg={6} xs={12} className={classes.copy}>
                        <Typography variant='subtitle1'>Copyright &copy; 2022 Created by <span >Tran Bon</span></Typography>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Box className={classes.list} component="ul" edge='end'>
                            <li>
                                <IconButton size='medium' color="primary" aria-label="Github" href="https://github.com/bon-nguyen" target="_blank" title='Github'>
                                    <GitHubIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton size='medium' color="primary" aria-label="Facebook" href="https://www.facebook.com/B5CbV116Y/" target="_blank" title='Facebook'>
                                    <FacebookIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton size='medium' color="primary" aria-label="Telegram" href="https://t.me/bonnguyen09" target="_blank" title='Telegram'>
                                    <TelegramIcon />
                                </IconButton>
                            </li>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default Footer;