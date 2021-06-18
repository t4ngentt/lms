import React, { useEffect, useState } from "react";
import Base from "../../Core/components/ui/Base";
import CourseItem from "../../Core/components/ui/CourseItem";
import { StudentClassroomInfo } from "../helper/Student";
import { TeacherClassroomInfo } from "../helper/Teacher";
// importing components from material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	header: {
		boxShadow: "none",
		padding: "0",
	},
	courseContainer: {
		padding: "2rem",
	},
}));

export default function Classroom() {
	const classes = useStyles();
	const [courses, setCourses] = useState([]);
	
	useEffect(() => {
		const onLoad = () => {
			if (JSON.parse(localStorage.getItem("jwt")).user.role === 0) {
				StudentClassroomInfo()
					.then((data) => {
						console.log("Setting Courses ");
						setCourses(data);
					})
					.catch(console.log("signin request failed"));
			} else if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
				TeacherClassroomInfo()
					.then((data) => {
						setCourses(data);
					})
					.catch(console.log("signin request failed"));
			}
		};
		onLoad();
	}, []);
	return (
		<Base>
			<AppBar position="static" color="transparent" className={classes.header}>
				<Toolbar variant="dense" disableGutters>
					<Typography variant="h4" color="inherit">
						Classroom
					</Typography>
				</Toolbar>
			</AppBar>
			<Divider />
			<Grid container spacing={6} className={classes.courseContainer}>
				{courses.map((course, index) => {
					return (
						<Grid item xs={12} lg={4} md={6} sm={12}>
							<CourseItem
								name={course.name}
								description={course.description}
								course_id={course.course_id}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Base>
	);
}
