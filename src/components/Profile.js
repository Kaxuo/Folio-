import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Box from '@material-ui/core/Box';
import avatar from '../logo/avatar.png'
import book from '../logo/book.svg'
import SkillBar from 'react-skillbars'
import Fade from 'react-reveal/Fade';


function Profile() {


    const skills = [
        {
            "type": "HTML",
            "level": 90
        },
        {
            "type": "CSS",
            "level": 90
        },
        {
            "type": "Javascript",
            "level": 80
        },
        {
            "type": "React",
            "level": 80
        },
        {
            "type": "Python",
            "level": 50
        },
        {
            "type": "Django",
            "level": 60
        },
        {
            "type": "MySQL",
            "level": 50
        },
        {
            "type": "NoSQL",
            "level": 70
        },
        {
            "type": "NodeJs",
            "level": 50
        },
    ]
    const color = {
        "bar": "#3498db",
        "title": {
            "text": "#fff",
            "background": "#2980b9"
        }
    }
    const useStyles = makeStyles((theme) => ({

        page: {
            // backgroundImage: `url(${background})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            paddingTop: "3%",
            fontFamily: 'Arimo',
            background: "#F5F5F5",
            paddingLeft: "5%",
            paddingRight: "5%",
            [theme.breakpoints.down('sm')]: {
                paddingLeft:"1%",
                paddingRight:"1%"
            },
        },
        subtitles: {
            marginTop: "5%",
            fontStyle: "italic",
            fontWeight: "bold",
            backgroundColor: "grey",

        },
        text: {
            marginTop: "3%",

        },
        leftSide: {
            textAlign: "center",
            paddingTop: "2%",
            marginLeft: "2%",
            marginRight: "2%",
            [theme.breakpoints.down('lg')]: {
                width: "90%"
            },
            [theme.breakpoints.down('md')]: {
                width:"100%",
                marginRight:"0%",
                marginLeft:"0%",
            },
        },
        rightSide: {
            textAlign: "center",
            paddingTop: "2%",
            marginRight: "2%",
            marginLeft: "2%",
            [theme.breakpoints.down('md')]: {
                marginRight:"0%",
                marginLeft:"0%"
            },
        },
        flex: {
            [theme.breakpoints.down('md')]: {
                flexDirection: "column"
            },
            margin:0,
            padding:0
        },
        img: {
            borderRadius: "50%",
            width: "200px",
            height: "200px",
        },
        img2: {
            borderRadius: "50%",
            width: "198px",
            height: "198px",
        },
        title: {
            textAlign: "center",
            fontSize: "65px",
            fontFamily: 'Raleway',
            paddingBottom: "1%",
            letterSpacing: '5px',
            display: "inline",
            color: "black",
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
                borderBottom: "5px solid black",
            }
        },
        level: {
            marginTop: "2%",
            backgroundColor: "lightgrey"
        },
        level2: {
            marginTop: "5%",

        },
    }))


    const classes = useStyles()
    return (
        <div className={classes.page}>
            <div className={classes.title}>
                <h1>Profile </h1>
            </div>
            <Box className={classes.flex} display="flex" justifyContent="space-between" >
                <Box className={classes.leftSide}>
                    <Fade left>
                        <img className={classes.img} src={avatar} alt="ava" />
                        <h2 className={classes.subtitles}> About me  </h2>
                        <p className={classes.text}>Hello ! Thanks for checking my page, I'm a self-taught programmer who started coding as a hobby.
                        <br /> <br />I studied law at the University of Mons and then Brussel. I started studying programming in my spare time because it was really engaging and overall fits me a lot better. I'm always motivated to learn new languages and try new things.<br />  <br />I'm fluent in French, English and Vietnamese. I can speak a little bit of Dutch and Japanese (however, I will be happy to improve my Dutch if given the chance) </p>

                        <h2 className={classes.subtitles}> Education </h2>
                        <p className={classes.text}>
                            2008 – 2014 : Secondary School, Mouscron<br />

                    2015 – 2018 : University of Mons (UMONS)<br />

                    2018 – 2019 : University of Brussel (ULB)<br />

                        </p>
                        <h2 className={classes.subtitles}> Personality </h2>
                        <div style={{ textAlign: "justify" }}>
                            <p className={classes.text}>
                                • Excellent team player, I will always try to have the best interactions with others. <br />
                    • Main objective is to improve myself and allowing myself to handle more responsibilites.<br />
                    • Trying to get a challenging and rewarding Web developer position where my experience as a programmer will be fully utilized.<br />
                    • Trying to get an entry-level software engineer position in a fast-paced organization where technical skills and ability to quickly adapt to change are duly compensated.<br />
                    • Critical thinking and problem-solving skills.<br />
                    • Excellent communication skills, including written and verbal. <br />
                    • Strong attention to small details.<br />

                            </p>
                        </div>
                    </Fade>
                </Box>

                <Box style={{ width: "100%" }} className={classes.rightSide}>
                    <Fade right>
                        <img className={classes.img2} src={book} alt="ava" />
                        <h2 className={classes.subtitles}> Languages </h2>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <ProgressBar className={classes.level} label="French" now={100} />
                            <ProgressBar className={classes.level} label="English" now={90} />
                            <ProgressBar className={classes.level} label="Vietnamese" now={90} />
                            <ProgressBar className={classes.level} label="Dutch" now={50} />
                            <ProgressBar className={classes.level} label="Japanese" now={30} />
                        </Box>
                        <h2 className={classes.subtitles}> Programming skills </h2>
                        <Box className={classes.level2} display="flex" flexDirection="column" >
                            <SkillBar skills={skills} animationDuration={2000} animationDelay={0} colors={color} />
                        </Box>
                    </Fade>
                </Box>
            </Box>
        </div>
    )
}

export default Profile;
