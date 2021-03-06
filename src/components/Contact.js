import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import ContactsIcon from '@material-ui/icons/Contacts';
import * as emailjs from 'emailjs-com'
import Zoom from 'react-reveal/Zoom';

function Contact() {

    // to learn how to send email check this again if you forget https://dev.to/wildfire132/using-emailjs-and-react-to-send-support-emails-314i 

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        subject: ""
    })
    const { register, handleSubmit, errors, reset } = useForm()


    const onSubmit = data => {
        // console.log(data)
        var service_id = "gmail";
        var template_id = "template_S7ZC03v7";

        emailjs.send(service_id, template_id, state, 'user_kwZPePXhwVG3zpB9XBiHB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        reset()
    }
    // console.log(watch('example')) // watch input value by passing the name of it

    const handleChange = event => {
        // if checkbox ! 
        // const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const useStyles = makeStyles((theme) => ({
        page: {
            paddingTop: "4%",
            fontFamily: 'Raleway',
            overflow: "hidden",
            color: "white",
            paddingBottom:"5vh"
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
            },
        },
        form: {
            padding: "3%",
            textAlign: "left"
        },
        label: {
            fontWeight: "bold",
            fontSize: "20px",
            paddingBottom: "1%",
            paddingTop: "2%"
        },
        input: {
            width: "100%",
            borderRadius: "10px",
        },
        text: {
            display: "block",
            width: "100%",
            borderRadius: "10px",
            height: 200
        },
        but: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            width: "100%",
            marginTop: "3%",
        },
        error: {
            paddingTop: "3%",
            color: "red"
        }
    }))

    const classes = useStyles()
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

    return (

        <form className={classes.page} onSubmit={handleSubmit(onSubmit)}>
        <Zoom>
            <div className={classes.container}>
                <h1 style={{ borderBottom: " 2px groove white", paddingBottom: "1%", fontFamily: 'Raleway', }}> Contact Me ! </h1>
                <div style={{ fontFamily: 'Raleway', borderBottom: " 2px groove white", fontSize: "px" }}>
                    <p> <PhoneAndroidIcon color="primary" />+32 486 72 95 96</p>
                    <p> <DraftsIcon color="primary" /> Nguyen.Hoang7451@gmail.com</p>
                    <p> <ContactsIcon color="primary" /> Or you could submit the form below directly </p>
                </div>
                <div className={classes.form}>
                    <label className={classes.label}> First Name :</label>
                    <input className={classes.input}  onChange={handleChange} placeholder="First name" name="firstName" ref={register({ required: true, minLength:2 })} />
                    {errors.firstName && errors.firstName.type === "required" && (<p className={classes.error}> This is required </p>)}
                    {errors.firstName && errors.firstName.type === "minLength" && (<p className={classes.error}>This field requires a minimum length of 2</p>)}
                    <label className={classes.label}> Last Name :</label>
                    <input className={classes.input}  onChange={handleChange} placeholder="Last name" name="lastName" ref={register({ required: true})} />
                    {errors.lastName && errors.lastName.type === "required" && (<p className={classes.error}> This is required </p>)}
                    <label className={classes.label}> Subject :</label>
                    <input className={classes.input}  onChange={handleChange} placeholder="Subject" name="subject" ref={register({ required: true })} />
                    {errors.subject && errors.subject.type === "required" && (<p className={classes.error}> This is required </p>)}
                    <label className={classes.label}> Email :</label>
                    <input className={classes.input}  onChange={handleChange} placeholder="Email" name="email" ref={register({ required: true , pattern : regex})} />
                    {errors.email && errors.email.type === "required" && (<p className={classes.error}> This is required </p>)}
                    {errors.email && errors.email.type === "pattern" && (<p className={classes.error}> Invalid Email </p>)}
                    <label className={classes.label}> Message :</label>
                    <textarea className={classes.text} onChange={handleChange} placeholder="Message" name="message" ref={register({ required: true, minLength:10 })} />
                    {errors.message && errors.message.type === "required" && (<p className={classes.error}> This is Required </p>)}
                    {errors.message && errors.message.type === "minLength" && (<p className={classes.error}> Sorry ! Too short </p>)}
                    <Button disabled={!state.firstName || !state.email || !state.lastName || !state.message} type="submit" className={classes.but}>Submit</Button>
                </div>
            </div>
        </Zoom>
    </form>

    )
}

export default Contact;
