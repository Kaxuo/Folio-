import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineArrowUp, AiFillFacebook, } from "react-icons/ai"
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import { GrLinkedin } from "react-icons/gr"


function Footer(props) {

    const useStyles = makeStyles((theme) => ({
        page: {
            height: "200px",
            backgroundColor: "#1B242F",
        },
        arrow: {
            position: "relative",
            top: "-5%",
            textAlign: "center"
        },
        face: {
            textAlign: "center",
            color: "white",
            paddingTop: "1%"
        },
        items: {
            color: "white",
            paddingTop: "1%",
            margin:"10px"
        },
    }))

    const classes = useStyles()
    return (
        <div className={classes.page}>
            <div className={classes.arrow}>
                <Button onClick={() => props.scrollMain()} variant="contained" color="secondary"  ><AiOutlineArrowUp style={{ fontSize: "25px" }} /></Button>
            </div>
            <Box display="flex" justifyContent="center">
                <Box className={classes.items}>
                    <a href="https://www.facebook.com/kevin.nguyen.355" rel="noopener noreferrer" target="_blank"><AiFillFacebook style={{ fontSize: "45px",color:"white" }} /></a>
                </Box>
                <Box className={classes.items}>
                    <a href="https://github.com/Kaxuo" rel="noopener noreferrer" target="_blank"><GitHubIcon style={{ fontSize: "45px",color:"white" }} /></a>
                </Box>
                <Box className={classes.items}>
                    <a href="https://www.linkedin.com/in/nguyen-hoang-1956a71a9/" rel="noopener noreferrer" target="_blank"><GrLinkedin style={{ fontSize: "45px",color:"white" }} /></a>
                </Box>
            </Box>
            <div className={classes.face}>
                <p style={{ fontFamily: 'Arimo', fontSize: "15px" }}> Nguyen Hoang <span style={{ color: "red" }}>© 2020 </span> </p>
            </div>
        </div>
    )
}

export default Footer;
