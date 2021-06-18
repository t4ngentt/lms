import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Base from "../../Core/components/ui/Base"
import {Divider} from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CoverPhoto from "../../Core/components/images/cover2.jpg"
import ProfilePhoto from "../../Core/components/images/Person2.jpg"
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
 
//Social Media Icons---->
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';


const useStyles = makeStyles((theme) =>({
  root: {
      marginTop : "5%",
    // maxWidth: 345,
  },
  header : {
    boxShadow : "none",
    padding : "0"
},
  media: {
    height: 140,
  },
  large : {
    width: "100px",
    height: "100px",
  },
  profilePhoto : {
      position : "absolute",
      marginTop : "85px",
      marginLeft : "30px"
  },
  cardContent : {
      [theme.breakpoints.down("md")] : {
        marginTop : "7%"
      },
      [theme.breakpoints.down("sm")] :{
        marginTop : "10%"
      },
      marginTop : "4%"
      
  },
  editButton : {
      position : "absolute",
      right : "5px",

  }
}));

export default function Profile() {
  const classes = useStyles();
  return (
      <Base>
      <AppBar position="static" color="transparent" className={classes.header} >
                <Toolbar variant="dense" disableGutters>
                    <Typography variant="h4" color="inherit" >
                        Profile
                    </Typography>
                </Toolbar>
            </AppBar>
            <Divider />
        <Card className={classes.root}>
        <CardActionArea>
            <span className={classes.profilePhoto}>
            <Avatar alt="profile-photo" src={ProfilePhoto} className={classes.large} />
            </span>
            <CardMedia
            className={classes.media}
            image={CoverPhoto}
            title="Background-Photo"
            />
            <CardContent className={classes.cardContent}>
            <Button variant="contained" color="primary" className={classes.editButton}>
                Edit Profile
            </Button>
            <Typography gutterBottom variant="h5" component="h2">
                Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               Bio
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <span className={classes.iconsContainer}>
                <IconButton aria-label="LinkedInIcon"  >
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="InstagramIcon"  >
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="FacebookIcon"  >
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="TwitterIcon"  >
                    <TwitterIcon />
                </IconButton>
                <IconButton aria-label="PinterestIcon"  >
                    <PinterestIcon />
                </IconButton>
        </span>
        </CardActions>
    </Card>
    </Base>
  );
}