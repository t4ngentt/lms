import React from 'react'
import Base from "../../Core/components/ui/Base"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Divider} from "@material-ui/core"
import AddQuestionButton from "../../Core/components/ui/AddQuestionButton"
import ForumItem from "../../Core/components/ui/ForumItem"


const useStyles = makeStyles((theme) => ({
    header : {
        boxShadow : "none",
        padding : "0",
    }, 
    forumContainer :{
        paddingTop : "2rem"
    },
    AddButton :{
        marginLeft : "auto"
     },
    }))

export default function Forums() {
    const classes = useStyles();
    return (
        <Base>
           <AppBar position="static" color="transparent" className={classes.header} >
                <Toolbar variant="dense" disableGutters>
                    <Typography variant="h4" color="inherit" >
                        Forums
                    </Typography>
                    <span className={classes.AddButton}>
                        <AddQuestionButton />
                    </span>
                </Toolbar>                
            </AppBar>
            <Divider />
            <Grid container spacing={3} className={classes.forumContainer}>
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid> 
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid> 
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid> 
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid> 
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid>             
                <Grid item xs={12} lg={12} md={12} sm={12}>
                    <ForumItem />
                </Grid> 
            </Grid>
        </Base>
    )
}
