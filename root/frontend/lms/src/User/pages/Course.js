import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../Auth/helper/index";
import Base from "../../Core/ui/Base";
import { getGroupDetails } from "../helper/Student";
import { getGroupCourseDetails } from "../helper/Teacher";
import ClassroomNavigator from "../../Core/ui/Components/ClassroomNavigation";
import { useParams, useLocation } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, ButtonGroup, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100%",
	},
	TabArea: {
		minHeight: "500px",
	},
}));

export default function Course(props) {
	const { user } = getUser();
	const classes = useStyles();
	const location = useLocation();
	const { group_id, course_id, group_course_id } = useParams();
	const [courseName, setCourseName] = useState();
	const [groupName, setGroupName] = useState();
	const [activeTab, setActiveTab] = useState(0);
	const setGroup = () => {
		if (user.role === 0) {
			if (location.state) {
				setCourseName(location.state.courseName);
				setGroupName(location.state.groupName);
			} else {
				getGroupDetails(group_id).then((data) => {
					setCourseName(data.group_name);
				});
			}
		} else if (user.role === 1) {
			if (location.state) {
				setCourseName(location.state.courseName);
				setGroupName(location.state.groupName);
			} else {
				getGroupCourseDetails(group_course_id).then((data) => {
					console.log("GROUP_COURSE_DETAILS", data);
					setCourseName(data.course_id);
					setGroupName(data.group_id);
				});
			}
		}
	};

	const handleTabChange = () => {
		if (
			window.location.pathname ===
				`/student/classroom/group/${group_id}/course/${course_id}/assignment` &&
			activeTab !== 0
		) {
			console.log("Changing color");
			setActiveTab(0);
		} else if (
			window.location.pathname ===
				`/student/classroom/group/${group_id}/course/${course_id}/quiz` &&
			activeTab !== 1
		) {
			setActiveTab(1);
		} else if (
			window.location.pathname ===
				`/student/classroom/group/${group_id}/course/${course_id}/resource` &&
			activeTab !== 2
		) {
			setActiveTab(2);
		}
	};

	useEffect(() => {
		// onLoad();
		setGroup();
		handleTabChange();
	}, []);

	return (
		<Base>
			<Grid container spacing={3}>
				<Grid item lg={8} md={7}>
					<div className={classes.Greeting}>
						<Typography variant="h4">{courseName}</Typography>
					</div>
					<div>
						<ClassroomNavigator
							group_name={groupName}
							course_name={courseName}
							group_id={group_id}
							course_id={course_id}
							group_course_id={group_course_id}
						/>
					</div>
				</Grid>
				<Grid item lg={4} md={5}>
					<Grid item container direction="column" alignItems="flex-end">
						<Grid item lg={12}>
							<ButtonGroup
								variant="text"
								color="primary"
								aria-label="text primary button group"
							>
								<Button
									component={Link}
									to={{
										pathname: `/student/classroom/group/${group_id}/course/${course_id}/resource`,
										state: {
											groupName: groupName,
											courseName: courseName,
										},
									}}
									onClick={() => {
										setActiveTab(2);
									}}
									color={activeTab === 2 ? "primary" : "inherit"}
								>
									Resources
								</Button>
								<Button
									component={Link}
									to={{
										pathname: `/student/classroom/group/${group_id}/course/${course_id}/assignment`,
										state: {
											groupName: groupName,
											courseName: courseName,
										},
									}}
									onClick={() => {
										setActiveTab(0);
									}}
									color={activeTab === 0 ? "primary" : "inherit"}
								>
									Assignments
								</Button>
								<Button
									component={Link}
									to={{
										pathname: `/student/classroom/group/${group_id}/course/${course_id}/quiz`,
										state: {
											groupName: groupName,
											courseName: courseName,
										},
									}}
									onClick={() => {
										setActiveTab(1);
									}}
									color={activeTab === 1 ? "primary" : "inherit"}
								>
									Quizzes
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{props.children}
		</Base>
	);
}
