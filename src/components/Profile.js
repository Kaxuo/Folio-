import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Zoom from 'react-reveal/Zoom';



function Profile() {

    const [french, setfrench] = useState(true)
    const [english, setenglish] = useState(true)
    const [vietnamiese, setvietnamiese] = useState(true)
    const [dutch, setdutch] = useState(false)
    const [japanese, setjapanese] = useState(false)


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
            fontSize: "20px"
        },
        button: {
            backgroundColor: "#303F9F",
            padding: "1%",
            margin: "1%",
            cursor: "default",
            color: "white",
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
                    <p className={classes.profil} > Hello! Thanks for checking my resumé. <br />I'm a self-taught programmer who started coding as a hobby.<br />I studied law at the University of Mons and then Brussels but at some point, I wasn't motivated anymore and put it on hold. I started studying programming on my own since it was more appealing. I'm always motivated to learn new things so if there is a language you wish for me to learn, I won't mind doing so.<br /> I'm highly motivated to work in this field and if you will have me, I will do my best to meet your expectations.
                Unfortunately, I do not have any experience working in this field but I am really looking forward to start working on some projects.
                I'm fluent in french, english and vietnamiese. I can speak a little bit of dutch and japanese (however, I wouldn't mind improving my dutch if given the chance).
                </p>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}>Education </h3>
                    </div>
                    <p className={classes.profil}>
                        Secondary School, Mouscron<br />
                2008 – 2014<br />
                University of Mons (UMONS)<br />
                2015 - 2018<br />
                University of Brussel (ULB)<br />
                2018 - 2019<br />
                    </p>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}> Skills </h3>
                    </div>
                    <div className={classes.profil}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                HTML
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" now={80} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                CSS
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" now={80} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                React
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" now={85} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                Python
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Experienced" now={50} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                Django
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Experienced" now={60} />
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button className={classes.button} color="primary">
                                MySQL
                            </Button>
                            <ProgressBar style={{ width: "85%", margin: "2%" }} label="Experienced" now={50} />
                        </div>
                        <br />
                    </div>
                    <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                        <h3 style={{ fontWeight: "bold" }}> Languages</h3>
                    </div>
                    {/* THIS IS HOW YOU CHANGE CLASSNAME DEPENDING ON DATA WITH TOSE TICKS */}
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
                    </Button>
                </div>
            </Zoom>
        </div>
    )
}

export default Profile;