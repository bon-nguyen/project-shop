import React, { useState } from 'react';

import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../features/Auth/userSlice';
import { AppBar, Box, Button, Dialog, DialogContent, IconButton, InputBase, makeStyles, Menu, MenuItem, Toolbar, Typography, Container, alpha, Badge } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../Logo/Logo';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {cartItemsCountSelector} from '../../features/Cart/selectors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonClose: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
  wrap: {
    padding: '0',
  },

  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }

}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector( state => state.user.current );
  const isLoggedIn = !!loggedIn.id;
  const cartItemsCount = useSelector(cartItemsCountSelector);
  console.log("cartItemsCount", cartItemsCount);
  const [open, setOpen] = useState(false);
  const [mode, setMode ] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (event)=>{
    setAnchorEl(event.currentTarget);
  }

  const handleCloseMenu = ()=> {
    setAnchorEl(null);
  }

  const handleLogoutClick = ()=>{
    const action = logout();
    dispatch(action);
  }

  const handleCartClick = ()=>{
    history.push('/cart');
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" >
          <Container maxWidth="lg">
            <Toolbar className={classes.wrap}>
              <Logo />
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
              <div className={classes.sectionDesktop}>
                {
                  !isLoggedIn && (
                    <Button color="inherit"
                      onClick={handleClickOpen}
                    >Login</Button>
                  )
                }
                {
                  isLoggedIn && (
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleUserClick}>
                      <AccountCircle />
                    </IconButton>
                  )
                }
                <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
                  <Badge badgeContent={cartItemsCount} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
            </div>
            </Toolbar>
          </Container>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>


        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <Button className={classes.buttonClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        <DialogContent>
            { mode === MODE.LOGIN  && (
              <>
                <Login closeDialog = {handleClose}/>
                <Box textAlign="center">
                  <Button color="primary" onClick={ () => setMode(MODE.REGISTER) }>
                      Already have an account. Register here
                  </Button>
                </Box>
              </>
            )}
            { mode === MODE.REGISTER  && (
              <>
                <Register closeDialog = {handleClose}/>
                <Box textAlign="center">
                  <Button color="primary" onClick={ () => setMode(MODE.LOGIN) }>
                      Already have an account. LOGIN here
                  </Button>
                </Box>
              </>
            )}
        </DialogContent>
      </Dialog>
      </div>
    </>
  );
}

