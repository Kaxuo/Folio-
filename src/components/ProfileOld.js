import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Zoom from 'react-reveal/Zoom';
import Box from '@material-ui/core/Box';

function Profile() {

    const useStyles = makeStyles((theme) => ({
        page: {
            backgroundColor: "#F5F5F5",
            paddingTop: "4%",
            fontFamily: 'Arimo',
            overflow: "hidden",
            color: "white",
            paddingBottom: "4%"
        },
        container: {
            backgroundColor: "#0E1219",
            textAlign: "center",
            width: "50%",
            height: "100%",
            marginLeft: "25%",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                marginLeft: "0",
            }
        },
        title: {
            paddingTop: "2%",
            paddingBottom: "1%"
        },
        profile: {
            backgroundColor: "#50617d",
            padding: "1%",
            textAlign: "center",
        },
        profil: {
            padding: "2%",
            textAlign: "justify",
            fontSize: "20px",
        },
        skills: {
            padding: "2%",
            textAlign: "justify",
            fontSize: "20px",
            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                alignItems: "center"
            },
        },
        break: {
            paddingLeft:"20px",
            paddingRight:"20px",
            textAlign:"center",
            [theme.breakpoints.down('md')]: {
                padding: "3%",
            },
        },
        education: {
            padding: "2%",
            textAlign: "justify",
            fontSize: "20px"
        },
        button: {
            backgroundColor: "#303F9F",
            padding: "1%",
            margin: "1%",
            cursor: "default",
            color: "white",
            width: "15%",
            pointerEvents: "none",
            "&:hover": {
                backgroundColor: "#303F9F",
                cursor: "default",

            },
        },
        lang: {
            backgroundColor: "#9A0036",
            padding: "1%",
            margin: "1%",
            cursor: "default",
            color: "white",
            "&:hover": {
                backgroundColor: "#9A0036",

            },
        },
        disabled: {
            backgroundColor: "inherit",
            padding: "1%",
            margin: "1%",
            cursor: "default",
            color: "white",
            border: "1px solid #9A0036",
            "&:hover": {
                backgroundColor: "inherit",
            },
        },
    }))


    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Zoom>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h3 style={{ fontWeight: "bold" }}> Nguyen Hoang</h3>
                        <h4 style={{ fontFamily: 'Raleway' }}> Full Stack Developper</h4>
                    </div>
                    <div className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}>Profile </h3>
                    </div>
                    <p className={classes.profil} > Hello! Thanks for checking my resume.
                    <br />I'm a self-taught programmer who started coding as a hobby.
                    <br />
                        <br />I studied law at the University of Mons and then Brussel. I started studying programming in my spare time because it was really engaging and overall fits me a lot better. I'm always motivated to learn new languages and try new things.
                    <br />
                        <br />
                    I'm fluent in French, English and Vietnamese. I can speak a little bit of Dutch and Japanese (however, I will be happy to improve my Dutch if given the chance).
                    </p>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}>Education </h3>
                    </div>
                    <p className={classes.education}>
                    2008 – 2014 : Secondary School, Mouscron (Secondary Degree)<br />

                    2015 – 2018 : University of Mons (UMONS)<br />

                    2018 – 2019 : University of Brussel (ULB)<br />

                    </p>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}> Programming skills </h3>
                    </div>
                    <Box display="flex" justifyContent="space-between" className={classes.skills}>
                        <Box className={classes.break}>
                            <p style={{ fontWeight: "bold", fontStyle: "italic" }}> Front-End Languages</p>
                            <div>HTML/CSS</div>
                            <div>Javascript</div>
                            <div>React(Redux)</div>
                        </Box>
                        <Box className={classes.break}>
                            <p style={{ fontWeight: "bold", fontStyle: "italic" }}> Back-End Languages</p>
                            <div>Python(Django)</div>
                            <div>Node.js(Express.js)</div>
                        </Box>
                        <Box className={classes.break}>
                            <p style={{ fontWeight: "bold", fontStyle: "italic" }}> Database Management</p>
                            <div>SQL(MySQL)</div>
                            <div>noSQL(MongoDB)</div>
                        </Box>
                    </Box>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}> Languages</h3>
                    </div>
                    <div className={classes.profil}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                French
                            </Button>
                            <ProgressBar style={{ width: "80%", margin: "2%" }} label="Native" now={100} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                English
                            </Button>
                            <ProgressBar style={{ width: "80%", margin: "2%" }} label="Fluent" now={80} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                Vietnamiese
                            </Button>
                            <ProgressBar style={{ width: "80%", margin: "2%" }} label="Fluent" now={80} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                Dutch
                            </Button>
                            <ProgressBar style={{ width: "80%", margin: "2%" }} label="Intermediate" now={50} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                Japanese
                            </Button>
                            <ProgressBar style={{ width: "80%", margin: "2%" }} label="Beginner" now={30} />
                        </div>
                    </div>
                    {/* THIS IS HOW YOU CHANGE CLASSNAME DEPENDING ON DATA WITH TOSE TICKS
                    <Button className={french ? `${classes.lang}` : `${classes.disabled}`} color="secondary" onClick={() => setfrench(!french)}  >
                        French
                    </Button>
                    <Button className={english ? `${classes.lang}` : `${classes.disabled}`} onClick={() => setenglish(!english)} color="secondary" >
                        English
                    </Button>
                    <Button className={vietnamiese ? `${classes.lang}` : `${classes.disabled}`} onClick={() => setvietnamiese(!vietnamiese)} color="secondary">
                        Vietnamiese
                    </Button>
                    <Button className={dutch ? `${classes.lang}` : `${classes.disabled}`} onClick={() => setdutch(!dutch)} color="secondary">
                        Dutch
                    </Button>
                    <Button className={japanese ? `${classes.lang}` : `${classes.disabled}`} onClick={() => setjapanese(!japanese)} color="secondary">
                        Japanese
                    </Button> */}
                </div>
            </Zoom>
        </div>
    )
}

export default Profile;