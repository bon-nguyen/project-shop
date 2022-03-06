import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import CloseIcon from '@material-ui/icons/Close';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from '../../features/Auth/userSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  }
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedIn = useSelector( state => state.user.current );
  const isLoggedIn = !!loggedIn.id;

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

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <CodeIcon className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
              Project Car
            </Typography>
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

          </Toolbar>
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

