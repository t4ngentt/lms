import React, { useState, useEffect } from "react";
import ClassroomNavigator from "../../Core/ui/Components/ClassroomNavigation";
import { useParams, useLocation } from "react-router";
import { GroupInfo } from "../helper/Student";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Base from "../../Core/ui/Base";
import CourseCard from "../../Core/ui/Components/CourseCard";
const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "20px",
	},
	navigation: {
		marginBottom: "40px",
	},
}));

export default function Course() {
	const classes = useStyles();
	const location = useLocation();
	const { group_id } = useParams();
	const [groupName, setGroupName] = useState();
	const [courses, setCourses] = useState([]);
	const onLoad = () => {
		if (JSON.parse(localStorage.getItem("jwt")).user.role === 0) {
			GroupInfo(group_id)
				.then((data) => {
					setCourses(data);
				})
				.catch(console.log("signin request failed"));
		}
		// else if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
		// 	TeacherClassroomInfo()
		// 		.then((data) => {
		// 			setCourses(data);
		// 		})
		// 		.catch(console.log("signin request failed"));
		// }
	};
	const setGroup = () => {
		if (location.state.groupName) {
			setGroupName(location.state.groupName);
		}
		else
		{
			
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
				<Typography variant="h4">Courses</Typography>
			</div>
			<div className={classes.navigation}>
				<ClassroomNavigator
					group_name={location.state.groupName}
					group_id={group_id}
				/>
			</div>
			{courses && (
				<Grid container spacing={5} justifyContent="center" alignItems="center">
					{courses.map((course, index) => {
						return (
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<CourseCard
									name={course.course_name}
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
