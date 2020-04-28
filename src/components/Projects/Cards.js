import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 600,
    backgroundColor:"white",
    display:"inline-block",
    marginTop :"25px",
    marginLeft :"50px",
    marginRight :"50px",
    border:"3px outset black",
    transition: "transform .2s",
    '&:hover':{
      transform: "scale(1.1)",
      boxShadow: "10px 10px 5px "
    },
    [theme.breakpoints.down('xs')]:{
      margin:0,
      padding:0,
      width:"100%"
  }
  },
  media: {
    height: 300,
    width:"100%",
    cursor:"default"
  },
  view: {
      paddingLeft:"23%"
  },
  text: {
    color:"black",
    fontStyle: "italic",
    padding:"1%",
    fontFamily: 'Bitter'
},
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <img 
          className={classes.media}
          src={props.picture}
          alt={props.title}
          style={{borderBottom:"2px groove black"}}
        />
        <CardContent style={{cursor:"default"}}>
          <Typography >
            <strong style={{fontSize:"30px"}}>{props.title}</strong>
          </Typography>
          <Typography className={classes.text} component="p">
            <strong style={{textDecoration:"underline", color:"black"}}>Language(s) used :</strong>
            <br/>
             {props.languages}
          </Typography>
          <Typography className={classes.text} component="p">
          <strong style={{textDecoration:"underline", color:"black"}}>Description : </strong>
            <br/>
             {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.view} >
        <Button size="small" color="primary">
          <a style={{color:"inherit",fontWeight:"bold",fontSize:"15px"}} rel="noopener noreferrer" href={props.live} target="_blank">View Live</a>
        </Button>
        <Button size="small" color="primary">
        <a style={{color:"inherit",fontWeight:"bold",fontSize:"15px"}} rel="noopener noreferrer" href={props.code} target="_blank">View Code</a>
        </Button>
      </CardActions>
    </Card>
  );
}