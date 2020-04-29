import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineArrowUp, AiFillFacebook } from "react-icons/ai"
import Button from '@material-ui/core/Button';

function Footer(props) {

    const useStyles = makeStyles((theme) => ({
        page: {
            height: "200px",
            backgroundColor: "#1B242F",
        },
        arrow:{
            position:"relative",
            top:"-5%",
            textAlign:"center"
        },
        face:{
            position:"relative",
            textAlign:"center",
            color:"white",
            paddingTop:"1%"
        },
    }))

    const classes = useStyles()
    return (
        <div className={classes.page}>
            <div className={classes.arrow}>
            <Button onClick={() => props.scrollMain()} variant="contained" color="secondary"  ><AiOutlineArrowUp style={{fontSize:"25px"}} /></Button>
            </div>
            <div className={classes.face}>
            <a href="https://www.facebook.com/kevin.nguyen.355"  rel="noopener noreferrer"  target="_blank"><AiFillFacebook style={{fontSize:"45px"}} /></a>
            </div>
            <div className={classes.face}>
            <p style={{fontFamily: 'Arimo',fontSize:"15px"}}> Nguyen Hoang <span style={{color:"red"}}>© 2020 </span> </p>
            </div>
        </div>
    )
}

export default Footer;
