import React, { useState } from 'react';

import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../features/Auth/userSlice';
import { AppBar, Box, Button, Dialog, DialogContent, IconButton, InputBase, makeStyles, Menu, MenuItem, Toolbar, Container, alpha, Badge } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {cartItemsCountSelector} from '../../features/Cart/selectors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  container:{
    paddingLeft: '0',
    paddingRight: '0',
  },

  buttonClose: {
    position: 'absolute',
    top: "10px",
    right: '10px',
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
      <div className={classes.grow}>
        <AppBar position="static">
            <Container className={classes.container}>
              <Toolbar>
                <Logo />
                <div className={classes.grow} />
                <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
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
                      <IconButton aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleUserClick}>
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

