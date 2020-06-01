import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import reddrg from '../logo/reddrg.svg'




function Navbar(props) {
    const [open, setOpen] = useState(null)

    const handleClick = (event) => {
        setOpen(event.currentTarget);

    };

    const handleClose = () => {
        setOpen(null);
    };
    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor:"#1B242F"
        },
        back: {
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        hidden: {
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        nav:{
            // LINE BELOW TO MAKE THE UNDERLINE APPEAR 
            '&:after':{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "white",
                transform: "scaleX(0)",
                transition: "all 0.3s ease-in-out 0s",
            },
            '&:hover:after':{
                visibility: "visible",
                transform: "scaleX(1)",
            },
        },
        logo: {
            position: "absolute",
            left: "51%",
            marginLeft: "-50px!important",
            display: "block",
            width:"60px",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        },
        title: {
            flexGrow: 1,
        },
        important:{
            zIndex:"5"
        }
    }));

    const closeMain = () => {
        handleClose()
        props.scrollMain()
    }
    const closeProjects = () => {
        handleClose()
        props.scrollProjects()
    }
    const closeProfile = () => {
        handleClose()
        props.scrollProfile()
    }
    const closeContact = () => {
        handleClose()
        props.scrollContact()
    }


    const classes = useStyles(props);
    const dropdown =
        <div className={classes.important}> 
            <span style={{ color: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </span>
            <Menu
                id="simple-menu"
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={closeMain}>Main</MenuItem>
                <MenuItem onClick={closeProjects}>Projects</MenuItem>
                <MenuItem onClick={closeProfile}>Experience</MenuItem>
                <MenuItem onClick={closeContact}>Contact</MenuItem>
            </Menu>
        </div>


    return (
        <>
            <AppBar className={classes.background} position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Portfolio
                    </Typography>
                    <img className={classes.logo} alt='logo' src ={reddrg}/> 
                    <div className={classes.back}>
                        <Button className={classes.nav} onClick={() => props.scrollMain()} color="inherit">Main</Button>
                        <Button className={classes.nav} onClick={() => props.scrollProjects()} color="inherit">Projects</Button>
                        <Button className={classes.nav} onClick={() => props.scrollProfile()}color="inherit">Profile</Button>
                        <Button className={classes.nav} onClick={() => props.scrollContact()}color="inherit">Contact</Button>
                    </div>
                    <div className={classes.hidden}>
                        {dropdown}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
