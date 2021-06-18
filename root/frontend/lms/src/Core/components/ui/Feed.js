import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core"
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderWidth : "2px"
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
  markButton :{
    marginLeft : "auto"
  }
});

export default function Feed(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6">
            Feed
        </Typography>
        <Divider/>
        <Typography className={classes.description} color="textSecondary" gutterBottom >
          Information
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions >
      <span className={classes.markButton}>
      <Tooltip title="Mark as Read" placement="top">
      <IconButton aria-label="check"  >
        <CheckIcon />
      </IconButton>
      </Tooltip>
      </span>
      </CardActions>
    </Card>
  );
}