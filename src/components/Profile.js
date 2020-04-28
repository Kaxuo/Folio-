import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Fade from 'react-reveal/Fade';


function Profile() {

    const useStyles = makeStyles((theme) => ({
        page: {
            paddingTop: "4%",
            fontFamily: 'Arimo',
            overflow: "hidden",
            color:"white"
        },
        container: {
            backgroundColor: "#0E1219",
            textAlign: "center",
            width: "50%",
            height: "100%",
            marginLeft: "25%",
            [theme.breakpoints.down('sm')]:{
                width:"100%",
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
    }))

    const classes = useStyles()

    return (
        <Fade right>
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3 style={{ fontWeight: "bold" }}> Nguyen Hoang</h3>
                    <h4 style={{ fontFamily: 'Permanent Marker' }}> Full Stack Developper</h4>
                </div>
                <div className={classes.profile}>
                    <h3 style={{ fontWeight: "bold" }}>Profile </h3>
                </div>
                <p className={classes.profil} > Hello ! Thanks for checking my resumé . <br />I'm a self-taught programmer who started coding as a hobby I studied law at the University of Mons and then Brussels but at some point, I wasn't motivated anymore and put it on hold. I started studying programming on my own since it was more appealing. I'm always motivated to learn new things so if there is a language you wish for me to learn, I won't mind doing so.<br /> I'm highly motivated to work in this field and if you will have me, I will do my best to meet your expectations.
                Unfortunately, I do not have any experience working in this field but I am really looking forward to start working on some projects. 
                I'm fluent in french, english and vietnamiese. I can speak a little bit of dutch and japanese(however, I wouldn't mind improving my dutch if given the chance)
                </p>
                <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                    <h3 style={{ fontWeight: "bold" }}>Education </h3>
                </div>
                <p className={classes.profil}>
                Secondary School , Mouscron<br />
                2009 – 2015<br />
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
                        <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="primary">
                            HTML
                    </Button>
                        <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" animated now={80} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="primary">
                            CSS
                    </Button>
                        <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" animated now={80} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="primary">
                            React
                    </Button>
                        <ProgressBar style={{ width: "85%", margin: "2%" }} label="Advanced" animated now={85} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="primary">
                            Python
                    </Button>
                        <ProgressBar style={{ width: "85%", margin: "2%" }} label="Experienced" animated now={50} />
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="primary">
                            Django
                    </Button>
                        <ProgressBar style={{ width: "85%", margin: "2%" }} label="Experienced" animated now={60} />
                    </div>
                    <br />
                </div>
                <div style={{ backgroundColor: "#50617d" }} className={classes.profile}>
                    <h3 style={{ fontWeight: "bold" }}> Languages</h3>
                </div>
                <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="secondary">
                    French
                    </Button>
                <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="secondary">
                    English
                    </Button>
                <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="contained" color="secondary">
                    Vietnamiese
                    </Button>
                <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="outlined" color="secondary">
                    Dutch
                    </Button>
                <Button style={{ padding: "1%", margin: "1%", cursor: "default" }} variant="outlined" color="secondary">
                    Japanese
                    </Button>
            </div>
        </div>
        </Fade>
    )
}

export default Profile;