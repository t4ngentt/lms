import React from 'react'
import StudentCourse from "./Course"
import Grid from '@material-ui/core/Grid'; 
import CourseCard from "../../Core/components/ui/CourseCard"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    assContainer :{
        marginTop : "15px"
    },
    AssListItem : {
        padding : "15px",
        margin : "auto"
    }
    
})

function Quiz() {
    const classes = useStyles();
    return (
        <StudentCourse>
            <Grid Container direction="column" justify="center" alignItems="center" className={classes.assContainer}>
                <Grid item lg={10} className={classes.AssListItem}>
                    <CourseCard title="Quiz" buttonName="Attempt"/>
                </Grid>
                <Grid item lg={10} className={classes.AssListItem}>
                    <CourseCard title="Quiz" buttonName="Attempt"/>
                </Grid>
                <Grid item lg={10} className={classes.AssListItem}>
                    <CourseCard title="Quiz" buttonName="Attempt"/>
                </Grid>
                <Grid item lg={10} className={classes.AssListItem}>
                    <CourseCard title="Quiz" buttonName="Attempt"/>
                </Grid>
            </Grid>
        </StudentCourse>
    )
}

export default Quiz


