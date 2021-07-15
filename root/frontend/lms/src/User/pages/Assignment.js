import React, { useState, useEffect } from "react";
import ClassroomNavigator from "../../Core/ui/Components/ClassroomNavigation";
import { useParams, useLocation } from "react-router";
import { GroupInfo, getGroupDetails } from "../helper/Student";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Base from "../../Core/ui/Base";
import AssignmentCard from "../../Core/ui/Components/AssignmentCard";
const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "20px",
	},
	navigation: {
		marginBottom: "40px",
	},
}));

export default function Assignment(props) {
	const classes = useStyles();
	const location = useLocation();
	const { group_id , course_id } = useParams();
	const [courseName, setCourseName] = useState();
	const [groupName, setGroupName] = useState();
	const [assignments, setAssignments] = useState([]);
	// const onLoad = () => {
	// 	if (JSON.parse(localStorage.getItem("jwt")).user.role === 0) {
	// 		GroupInfo(group_id)
	// 			.then((data) => {
	// 				setAssignments(data);
	// 			})
	// 			.catch(console.log("signin request failed"));
	// 	}
	// 	// else if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
	// 	// 	TeacherClassroomInfo()
	// 	// 		.then((data) => {
	// 	// 			setCourses(data);
	// 	// 		})
	// 	// 		.catch(console.log("signin request failed"));
	// 	// }
	// };
	const setGroup = () => {
		if (location.state) {
			setCourseName(location.state.courseName);
			setGroupName(location.state.groupName);
		} else {
			getGroupDetails(group_id).then((data) => {
				setCourseName(data.group_name);
			});
		}
	};

	useEffect(() => {
		// onLoad();
		setGroup();
	}, []);

	const noCourses = () => {
		return <Typography>No Courses</Typography>;
	};

	return (
		<Base>
			<div className={classes.Greeting}>
				<Typography variant="h4">{courseName}</Typography>
			</div>
			<div className={classes.navigation}>
				<ClassroomNavigator group_name={groupName} course_name={courseName} group_id={group_id} course_id={course_id} />
			</div>
			<AssignmentCard />
		</Base>
	);
}
