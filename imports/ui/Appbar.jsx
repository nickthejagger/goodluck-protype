//importing React Dependencies 
import React, { Component } from 'react';
//importing material-ui
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, InputBase, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputAdornment from '@material-ui/core/InputAdornment';
import Badge from '@material-ui/core/Badge';
//importing material-ui/icon
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import NotificationsIcon from '@material-ui/icons/Notifications';

//importing css

const styles = theme => ({
  root: {
    width: '100%'
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  appBar: {
    position: 'relative',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width: 'auto%'
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
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
});
class NavBar extends Component  {
  
  render() {
    const { classes } = this.props;
    return(
      
      <div className={classes.root}>
        <AppBar position="static" color='primary' className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              GoodLuck
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                placeholder='Cari apa yang kamu mau'
                fullWidth
                classes= {{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <Button >
                <ShoppingCart
                aria-haspopup="true"
                color="inherit"
                variant="extendedFab"
                />
              </Button>
              <Button>
                <Badge color="secondary" badgeContent={4} className={classes.margin}>
                <NotificationsIcon
                aria-haspopup="true"
                color="inherit"
                variant="extendedFab"
                /></Badge>
              </Button>
              <Button
                //aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)