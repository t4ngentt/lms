import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  description: {
    fontSize: 14,
    height : "3rem"
  },
  pos: {
    marginBottom: 12,
  },
  goToButton :{
      
  }
});

export default function ForumItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6">
            Title
        </Typography>
        <Divider/>
        <Typography className={classes.description} color="textSecondary" gutterBottom >
          Description
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions>
        <Button variant="contained"
        color="primary" size="small" className={classes.goToButton} endIcon={<ArrowRightAltIcon/>} >Add Answer</Button>
      </CardActions>
    </Card>
  );
}