import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GiBookCover } from "react-icons/gi"
import { FcMultipleSmartphones } from "react-icons/fc"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { BsFillPersonLinesFill } from "react-icons/bs";
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Priorities() {
    const useStyles = makeStyles((theme) => ({
        page: {
            backgroundColor: "#1B242F",
            width: "100%",
            height: "100%",
            padding: "2vh",
            flexGrow: 1,
            overflow: "hidden"
        },
        title: {
            textAlign: "center",
            fontSize: "65px",
            fontFamily: 'Raleway',
            paddingBottom: "1%",
            letterSpacing: '5px',
            display: "inline",
            color: "white",
            [theme.breakpoints.down('xs')]: {
                letterSpacing: '0px',
            },
            // pseudoelement need to be quoted , same for content! 
            '&::after': {
                content: '""',
                display: "block",
                margin: "0 auto",
                width: "10%",
                paddingTop: "20px",
                borderBottom: "5px solid white",
            }
        },
        icon: {
            fontSize: "300%",
            // if you wanna move the hexagon
            // marginTop:"20%",
            bottom: "15px",
            position: "relative",
            left: "24px",
        },
        grid: {
            paddingTop: "5vh",
        },
        text: {
            textAlign: "center",
            padding: "3vh",
            fontFamily: 'Arimo',
        },
    }))

    const classes = useStyles()
    return (
        <div className={classes.page}>
            <div className={classes.title} ><h1>Priorities</h1></div>
            <Grid className={classes.grid} justify="center" container spacing={2}>
                <Grid item xs={12} md={2} >
                    <Fade left>
                        <div
                            className="hexagon">
                            <p className={classes.icon}> <GiBookCover /></p>
                        </div>
                        <div className={classes.text}>
                            <h3 style={{ color: "white", fontWeight: "bold" }}>Open-minded</h3>
                            <p style={{ color: "white" }}>Always eager to learn new languages when needed to complete a task</p>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Fade left>
                        <div className="hexagon">
                            <p className={classes.icon}> <BsFillPersonLinesFill /></p>
                        </div>
                        <div className={classes.text}>
                            <h3 style={{ color: "white", fontWeight: "bold" }}> Motivated</h3>
                            <p style={{ color: "white" }}>Extremely motivated to work in this field, always willing to give my best to complete the tasks</p>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Zoom >
                        <div className="hexagon">
                            <p className={classes.icon}> <FcMultipleSmartphones /></p>
                        </div>
                        <div className={classes.text}>
                            <h3 style={{ color: "white", fontWeight: "bold" }}> Responsive</h3>
                            <p style={{ color: "white" }}>My layouts will work on any device, big or small.</p>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Fade right>
                        <div className="hexagon">
                            <p className={classes.icon}> <AiFillCodeSandboxCircle /></p>
                        </div>
                        <div className={classes.text}>
                            <h3 style={{ color: "white", fontWeight: "bold" }}>Structure</h3>
                            <p style={{ color: "white" }}>Code easy to read and websites user friendly </p>
                        </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Fade right>
                        <div className="hexagon">
                            <p className={classes.icon}> <FiUsers /></p>
                        </div>
                        <div className={classes.text}>
                            <h3 style={{ color: "white", fontWeight: "bold" }}> Dynamic</h3>
                            <p style={{ color: "white" }}>A dynamic website is much more enjoyable than a static one</p>
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}

export default Priorities;
