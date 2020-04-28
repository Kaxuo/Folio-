import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import prog from '../logo/prog.jpg'
import HTML from '../logo/HTML.svg'
import CSS from '../logo/CSS.svg'
import JS from '../logo/JS.svg'
import react from '../logo/react.svg'
import Python from '../logo/Python.svg'
import django from '../logo/django.svg'
import Particles from './Particles'
import Button from '@material-ui/core/Button';


function Hero(props) {

    const useStyles = makeStyles((theme) => ({
        background: {
            backgroundImage: `url(${prog})`,
            overflow: "hidden",
            backgroundPosition: "center",
            backgroundSize: "fixed",
            height: "1080px",
            width: "100%",
            textAlign: 'center',
            paddingTop: "2%"
        },
        hero: {
            padding: "5%",
            color: "white",
        },
        title: {
            fontSize: "100px",
            fontFamily: 'Lobster',
            letterSpacing: '10px',
            position: "relative",
            [theme.breakpoints.down('sm')]: {
                letterSpacing: '0px',
                fontSize: "100px",
            },
            '&::after':{
                content: '""',
                display: "block",
                margin: "0 auto",
                width: "15%",
                paddingTop: "20px",
                borderBottom: "5px solid grey",
            }
        },
        stack: {
            paddingTop: "3%",
            fontFamily: 'Permanent Marker',
            fontSize: "60px",
            // !!!!!!!!! You needed to use position relative to put it in front , zindex didn't work
            position: "relative",
            color: "white",
            [theme.breakpoints.down('sm')]: {
                letterSpacing: '0px',
                fontSize: "50px",
            }
        },
        logos: {
            marginLeft: "30%",
            width: "40%",
            color: "white",
            border: "10px outset #242f38",
            borderRadius: "8px",
            // !!!!!!!!! You needed to use position relative to put it in front , zindex didn't work
            position: "relative",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                padding: "0",
                margin: "0"
            }
        },
        logo: {
            width: "15%",
            padding: "1%",
        },
    }))

    const classes = useStyles();

    return (
        <div>
        <Particles />
        <div className={classes.background} >
            <div className={classes.hero}>
                <h1 className={classes.title}> Nguyen Hoang</h1>
                <h2 className={classes.stack}> Full Stack Developper</h2>
                <Button onClick={() => props.scrollProjects()} style={{ color: "white", border: "3px solid grey", fontSize: "20px", marginTop:"2%" }} variant="outline" color="primary">
                    View My Projects
                </Button>
            </div>
            <div className={classes.logos} >
                <img className={classes.logo} src={HTML} alt="html" />
                <img className={classes.logo} src={CSS} alt="html" />
                <img style={{ width: "13.5%" }} className={classes.logo} src={JS} alt="html" />
                <img style={{ width: "25%" }} className={classes.logo} src={react} alt="html" />
                <img className={classes.logo} src={Python} alt="html" />
                <img style={{ width: "16%" }} className={classes.logo} src={django} alt="html" />
            </div>
        </div>
        </div>
    )
}

export default Hero;
