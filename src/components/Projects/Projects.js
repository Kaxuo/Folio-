import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from './Tabs'



function Projects() {

    const useStyles = makeStyles((theme) => ({
        background:{
            textAlign:"center",
            height:"100%",
            width:"100%",
            background: "linear-gradient(0deg, #1CB5E0 0%, #000851 100%)",
            overflow: "hidden",
            paddingTop:"2%",
            color:"white"
        },
        title:{
            fontSize:"130px",
            fontFamily: 'Lobster',
            paddingBottom:"1%",
            letterSpacing:'10px',
            [theme.breakpoints.down('xs')]:{
                letterSpacing:'0px',
            }
        },
    }))

    const classes = useStyles()
    return (
        <div className={classes.background}>
            <h1 className={classes.title}>Projects</h1>
            <Tabs/>
        </div>
    )
}

export default Projects;
