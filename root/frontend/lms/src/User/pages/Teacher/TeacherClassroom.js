import React, { useState, useEffect } from "react";
import ClassroomNavigator from "../../../Core/ui/Components/ClassroomNavigation";


import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Base from "../../../Core/ui/Base";
import CourseCard from "../../../Core/ui/Components/CourseCard";
const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "20px",
	},
	navigation: {
		marginBottom: "40px",
	},
}));

export default function TeacherClassroom() {
	const classes = useStyles();
	const [courses, setCourses] = useState([]);
	const onLoad = () => {
		if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
		}
	};

	useEffect(() => {
		onLoad();
	}, []);

	const noCourses = () => {
		return <Typography>No Courses</Typography>;
	};

	return (
		<Base>
			<div className={classes.Greeting}>
				<Typography variant="h4">Classroom</Typography>
			</div>
			<div className={classes.navigation}>
				<ClassroomNavigator />
			</div>
			{courses && (
				<Grid container spacing={5} justifyContent="center" alignItems="center">
					{courses.map((course, index) => {
						return (
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<CourseCard
									course_id={course.course_id}
									course_name={course.course_name}
									description={course.course_desc}
								/>
							</Grid>
						);
					})}
				</Grid>
			)}
			{courses.length === 0 && noCourses()}
		</Base>
	);
}
