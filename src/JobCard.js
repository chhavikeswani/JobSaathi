import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JobDetails from "./JobDetails"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 25,
    background:"#444B57",
    // color: "white"
  },
});

export default function JobCard({image, title, description, location, pay, ft, hours, employerName, contact, rating, date}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          // color={192537}
          title="Contemplative Reptile"
        //   radius = {50}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="black" component="p">
            {pay} • {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        
        <JobDetails title = {title} location = {location} contact={contact} date={date} description={description} employerName={employerName} ft={ft} hours={hours} pay={pay} rating={rating}/>
      {/* </CardActions> */}
    </Card>
  );
}
