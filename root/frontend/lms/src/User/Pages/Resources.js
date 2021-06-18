import React from 'react'
import Base from "../../Core/components/ui/Base"

// importing components from material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GetAppIcon from '@material-ui/icons/GetApp';
import {Divider} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    header : {
        boxShadow : "none",
        padding : "0"
    }, 
    assContainer :{
        paddingTop : "2rem"
    },
    AddButton : {
       marginLeft: "auto"
    },
    AssListItem : {
        marginLeft : "6%"
    }
    }))

export default function StudentClassroom() {
    const classes = useStyles();
    return (
        <Base>
            <AppBar position="static" color="transparent" className={classes.header} >
                <Toolbar variant="dense" disableGutters>
                    <Typography variant="h4" color="inherit" >
                        Resources
                    </Typography>
                </Toolbar>
            </AppBar>
            <Divider />
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
                    
        </Base>
    )
}
