import React from 'react'
import StudentCourse from "./Course"
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Divider} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    assContainer :{
        marginTop : "15px"
    },
    AssListItem : {
        margin : "auto"
        // border : "1px solid"
    },
    AddButton :{
        marginLeft : "auto"
     }   
})

function ClassResources() {
    const classes = useStyles();
    return (
        <StudentCourse>
            <Grid Container direction="column" justify="center" alignItems="center" className={classes.assContainer}>
                <Grid item lg={10} className={classes.AssListItem}>
                    <Toolbar disableGutters>
                        <Typography variant="h6" color="inherit" >
                            File
                        </Typography>
                        <span className={classes.AddButton}>
                            <IconButton color="black" aria-label="Attach Files" component="span">
                                <GetAppIcon />
                            </IconButton>
                        </span>
                    </Toolbar>
                </Grid>
                <Divider/>
                <Grid item lg={10} className={classes.AssListItem}>
                <Toolbar disableGutters>
                        <Typography variant="h6" color="inherit" >
                            File
                        </Typography>
                        <span className={classes.AddButton}>
                        <IconButton color="black" aria-label="Attach Files" component="span">
                                <GetAppIcon />
                            </IconButton>
                        </span>
                    </Toolbar>
                </Grid>
                <Divider/>
                <Grid item lg={10} className={classes.AssListItem}>
                <Toolbar disableGutters>
                        <Typography variant="h6" color="inherit" >
                            File
                        </Typography>
                        <span className={classes.AddButton}>
                        <IconButton color="black" aria-label="Attach Files" component="span">
                                <GetAppIcon />
                            </IconButton>
                        </span>
                    </Toolbar>
                </Grid>
                <Divider/>
                <Grid item lg={10} className={classes.AssListItem}>
                <Toolbar disableGutters>
                        <Typography variant="h6" color="inherit" >
                            File
                        </Typography>
                        <span className={classes.AddButton}>
                        <IconButton color="black" aria-label="Attach Files" component="span">
                                <GetAppIcon />
                            </IconButton>
                        </span>
                    </Toolbar>
                </Grid>
            </Grid>
        </StudentCourse>
    )
}

export default ClassResources


