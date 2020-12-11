import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import weatherchecker_preview from "../../assets/weatherchecker_preview.jpg";
import { Card, Button, Grid, Avatar } from '@material-ui/core/';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-c137.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WbSunnyIcon from '@material-ui/icons/WbSunny';

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
  },
  avatar: {
    backgroundColor: "lightblue"
  }
}));

export default function WeatherCheckerCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <WbSunnyIcon />
          </Avatar>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title="WeatherChecker"
        subheader="2019"
      />
      <CardMedia
        className={classes.media}
        image={weatherchecker_preview}
        title="Weather Checker Preview"

      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          A detailed weather checker that reports the latest forecasts. Utilizes its own library for fetching OpenWeatherMap JSON data.
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <Grid container spacing={1}>
        <Grid item>
            <FontAwesomeIcon size="3x" className={classes.icon} icon={["fab", "java"]} />
          </Grid>
          <Grid item>
            <FontAwesomeIcon size="3x" className={classes.icon} icon={["fab", "android"]} style />
          </Grid>
        </Grid>
        <AwesomeButton style={{ width: '65px', height: '40px', marginLeft: 'auto' }} type="primary" onPress={()=> window.open("https://github.com/garyli2/WeatherChecker", "_blank")}>Visit</AwesomeButton>
      </CardActions>

    </Card>
  );
}