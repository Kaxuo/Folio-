import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from './Tabs'
import Zoom from 'react-reveal/Zoom';
import {motion} from "framer-motion"


function Projects() {


    const useStyles = makeStyles((theme) => ({
        background:{
            backgroundColor:"#DCDCDC",
            textAlign:"center",
            height:"100%",
            width:"100%",
            overflow: "hidden",
            paddingTop:"2%",
            paddingBottom:"5%"
        },
        title:{
            fontSize:"55px",
            fontFamily: 'Raleway',
            paddingBottom:"1%",
            letterSpacing:'5px',
            [theme.breakpoints.down('xs')]:{
                letterSpacing:'0px',
            },
            // pseudoelement need to be quoted , same for content! 
            '&::after':{
                content: '""',
                display: "block",
                margin: "0 auto",
                width: "10%",
                paddingTop: "20px",
                borderBottom: "5px solid black",
            }
        },
    }))

    const classes = useStyles()
    return (
        <div className={classes.background}>
            <Zoom>
            <motion.h1 className={classes.title}>Projects</motion.h1>
            <Tabs/>
            </Zoom>
        </div>
    )
}

export default Projects;
