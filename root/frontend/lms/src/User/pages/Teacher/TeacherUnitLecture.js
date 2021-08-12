import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { getUser } from "../../../Auth/helper/index";
import { StudentCourseResources } from "../../helper/Student";
import { UnitLectures } from "../../helper/Teacher";
import NotFound from "../Common/NotFound";
import AttendanceNavigator from "../../../Core/ui/Components/AttendanceNavigation";
import Course from "../Common/Course";
import LectureCard from "../../../Core/ui/Components/LectureCard";
import { Grid, Typography } from "@material-ui/core";
import Base from "../../../Core/ui/Base";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "20px",
	},
	navigation: {
		marginBottom: "40px",
	},
}));

export default function TeacherUnitLecture() {
	const classes = useStyles();
	const { user } = getUser();
	const location = useLocation();
	const { group_course_id, unit_id } = useParams();
	const [lectures, setLectures] = useState();
	const [navigationDetails, setNavigationDetails] = useState({
		groupName: "",
		courseName: "",
	});
	const handleNavigationDetails = () => {
		if (location.state) {
			setNavigationDetails({
				groupName: location.state.groupName,
				courseName: location.state.courseName,
			});
		}
		// else {
		// 	if (user.role === 0) {
		// 		getGroupDetails(group_id)
		// 			.then((data) => {
		// 				setNavigationDetails(data.group_name);
		// 			})
		// 			.catch((error) => {
		// 				console.log(Error);
		// 			});
		// 	} else if (user.role === 1) {
		// 		getGroupCourseDetails(group_course_id).then((data) => {
		// 			setNavigationDetails({
		// 				...navigationDetails,
		// 				courseName: data.course_id,
		// 			});
		// 			setNavigationDetails({
		// 				...navigationDetails,
		// 				groupName: data.group_id,
		// 			});
		// 		});
		// 	}
		// }
	};
	const onLoad = async () => {
		await UnitLectures(unit_id)
			.then((data) => {
				setLectures(data);
			})
			.catch(console.log("Settings Units Failed"));
	};
	useEffect(() => {
		handleNavigationDetails();
		onLoad();
	}, []);
	return (
		<Base>
			<div className={classes.Greeting}>
				<Typography variant="h4">{navigationDetails.courseName}</Typography>
			</div>
			<div className={classes.navigation}>
				<AttendanceNavigator
					group_name={navigationDetails.groupName}
					course_name={navigationDetails.courseName}
				/>
			</div>
			{lectures !== undefined && (
				<Grid container spacing={5} justifyContent="center" alignItems="center">
					{lectures.map((lecture, index) => {
						return (
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<LectureCard
									lecture_number={lecture.lecture_number}
									topic={lecture.topic}
									group_course_id={group_course_id}
									unit_id={unit_id}
									lecture_id={lecture.course_unit}
									groupName={navigationDetails.groupName}
									courseName={navigationDetails.courseName}
								/>
							</Grid>
						);
					})}
				</Grid>
			)}
			{(lectures === undefined || lectures.length === 0) && (
				<NotFound title="No Lectures" />
			)}
		</Base>
	);
}
