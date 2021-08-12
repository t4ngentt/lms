import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { getUser } from "../../../Auth/helper/index";
import { GroupStudents } from "../../helper/Teacher";
import { LectureAttendanceAPI } from "../../helper/Teacher";
import NotFound from "../Common/NotFound";
import AttendanceNavigator from "../../../Core/ui/Components/AttendanceNavigation";
import {
	Grid,
	Typography,
	Checkbox,
	FormControlLabel,
	TextField,
	Button,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Base from "../../../Core/ui/Base";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "20px",
	},
	navigation: {
		marginBottom: "40px",
	},
	inputSection: {
		marginBottom: "100px",
	},
	submitButton: {
		marginTop: "50px",
		float: "right",
	},
}));

export default function LectureAttendance() {
	const classes = useStyles();
	const { user } = getUser();
	const location = useLocation();
	const [redirect, setRedirect] = useState(false);
	const { group_course_id, unit_id, lecture_id } = useParams();
	const [students, setStudents] = useState();
	const [navigationDetails, setNavigationDetails] = useState({
		groupName: "",
		courseName: "",
	});
	const performRedirect = () => {
		if (redirect) {
			return (
				<Redirect
					to={{
						pathname: `/teacher/attendance/group_course/${group_course_id}/unit/${unit_id}/lecture`,
						state: {
							groupName: location.state.groupName,
							courseName: location.state.courseName,
						},
					}}
				/>
			);
		}
	};
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
		await GroupStudents(group_course_id)
			.then((data) => {
				setStudents(
					data.map((student) => {
						return {
							...student,
							present: true,
						};
					})
				);
				console.log(students);
			})
			.catch(console.log("Settings Units Failed"));
	};
	const handleChange = (event, value) => {
		setStudents(
			students.map((student) => {
				student.present = true;
				return student;
			})
		);
		console.log(value);
		if (value.length !== 0) {
			value.map((absentStudent) => {
				setStudents(
					students.map((student) => {
						if (absentStudent.user_id === student.user_id) {
							student.present = false;
						}
						return student;
					})
				);
				return absentStudent;
			});
		}
	};
	const handleSubmit = () => {
		LectureAttendanceAPI(lecture_id, students)
			.then((res) => {
				console.log(res);
				setRedirect(true);
				performRedirect();
			})
			.catch((error) => {
				console.log(error);
			});
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
			<div className={classes.inputSection}>
				<Autocomplete
					multiple
					id="tags-outlined"
					onChange={handleChange}
					options={students !== undefined ? students : ""}
					getOptionLabel={(option) => option.user_id}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField
							{...params}
							variant="outlined"
							label="Add Absent Students"
							placeholder="Add Absent Students"
						/>
					)}
				/>
			</div>
			<Grid container>
				{students &&
					students.map((student, index) => {
						return (
							<Grid item lg={2}>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											checked={student.present}
											onChange={(event) => {
												let present = event.target.checked;
												setStudents(
													students.map((data) => {
														if (data.user_id === student.user_id) {
															data.present = present;
														}
														return data;
													})
												);
												console.log(students);
											}}
											inputProps={{
												"aria-label": "Present or Absent Checkbox",
											}}
										/>
									}
									label={student.user_id}
									labelPlacement="end"
								/>
							</Grid>
						);
					})}
			</Grid>
			<div>
				<Button
					variant="contained"
					color="primary"
					className={classes.submitButton}
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
			{(students === undefined || students.length === 0) && (
				<NotFound title="No Students" />
			)}
			{redirect && performRedirect()}
		</Base>
	);
}
