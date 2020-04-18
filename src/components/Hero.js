import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import prog from '../logo/prog.jpg'
import HTML from '../logo/HTML.svg'
import CSS from '../logo/CSS.svg'
import JS from '../logo/JS.svg'
import react from '../logo/react.svg'
import Python from '../logo/Python.svg'
import django from '../logo/django.svg'



function Hero() {

    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundImage: `url(${prog})`,
            overflow: "hidden",
            backgroundPosition: "center",
            backgroundSize: "fixed",
            height:"1080px",
            width:"100%",
            textAlign:'center',
        },
        hero:{
            padding:"5%",
            color:"white",
        },
        title:{
            fontSize:"130px",
            fontFamily: 'Lobster',
            paddingBottom:"3%",
            borderBottom: "5px groove #4287f5",
            letterSpacing:'10px',
            [theme.breakpoints.down('sm')]:{
                letterSpacing:'0px',
                fontSize:"100px",
            }
        },
        stack:{
            paddingTop:"4%",
            fontFamily: 'Permanent Marker',
            fontSize:"80px",
            [theme.breakpoints.down('sm')]:{
                letterSpacing:'0px',
                fontSize:"50px",
            }
        },
        logos:{
            marginLeft:"25%",
            width:"50%",
            color:"white",
            border :"10px outset #242f38",
            borderRadius:"8px",
            [theme.breakpoints.down('sm')]:{
                width:"100%",
                padding:"0",
                margin:"0"
            }
        },
        logo:{
            width:"15%",
            padding:"1%"
        },
    }))

    const classes = useStyles();

    return (
            <div className={classes.background}>
                <div className={classes.hero}>
                    <h1 className={classes.title}> Nguyen Hoang</h1>
                    <h2 className={classes.stack}> Full Stack Developper</h2>
                </div>
                <div className={classes.logos} >
                    <img className={classes.logo} src ={HTML} alt="html"/>
                    <img className={classes.logo} src ={CSS} alt="html"/>
                    <img style ={{width:"13.5%"}} className={classes.logo} src ={JS} alt="html"/>
                    <img style ={{width:"25%"}} className={classes.logo} src ={react} alt="html"/>
                    <img  className={classes.logo} src ={Python} alt="html"/>
                    <img  style ={{width:"16%"}} className={classes.logo} src ={django} alt="html"/>
                </div>
            </div>
    )
}

export default Hero;
