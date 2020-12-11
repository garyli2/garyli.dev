import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import semestershare_preview from "../../assets/semestershare_preview.png";
import { Card, Button, Grid } from '@material-ui/core/';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { AwesomeButton } from "react-awesome-button";
//import "react-awesome-button/src/styles/styles.scss";
//import "react-awesome-button/src/styles/themes/theme-c137/styles.scss";
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-c137.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 10,
    paddingTop: '56.25%',
  },
  icon: {
    marginBottom: '5px',
    marginLeft: '5px'
  }
}));

export default function SemesterShareCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img src="https://semestershare.com/images/logo_letter.png" style={{ width: "45px" }}></img>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title="SemesterShare"
        subheader="2018 - 2020"
      />
      <CardMedia
        className={classes.media}
        image={semestershare_preview}
        title="Semestershare Preview"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          A web platform where students input timetable data, keep track of their friends’ timetables and see live course information.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container spacing={1}>
          <Grid item>
            <FontAwesomeIcon size="3x" className={classes.icon} icon={["fab", "java"]} />
          </Grid>
          <Grid item>
            <FontAwesomeIcon size="3x" className={classes.icon} icon={["fab", "js-square"]} style />
          </Grid>
          <Grid item>
            <FontAwesomeIcon size="3x" className={classes.icon} icon={["fab", "bootstrap"]} style />
          </Grid>
        </Grid>
        <AwesomeButton style={{ width: '65px', height: '40px', marginLeft: 'auto' }} type="primary" onPress={()=> window.open("https://semestershare.com", "_blank")}>Visit</AwesomeButton>
      </CardActions>

    </Card>
  );
}