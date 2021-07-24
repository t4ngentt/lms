import React, { useState, useEffect } from "react";
import { getUser } from "../../../Auth/helper/index";
import { useParams, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { StudentCourseAssignments } from "../../helper/Student";
import { TeacherCourseAssignments } from "../../helper/Teacher";
import Course from "../Common/Course";
import AssignmentCard from "../../../Core/ui/Components/AssignmentCard";
import CreateAssignment from "../../../Core/ui/Components/CreateAssignment";
import NotFound from "./NotFound";
import { Grid, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
	noAssignments: {},
	fab: {
		position: "fixed",
		bottom: theme.spacing(5),
		right: theme.spacing(4),
	},
}));
export default function CourseAssignment() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [snackOpen, setSnackOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleSnackClick = () => {
		setSnackOpen(true);
	};
	const handleCloseClick = () => {
		setOpen(false);
	};
	const handleSnackClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
		handleSnackClick();
	};
	const { user } = getUser();
	const { group_id, course_id, group_course_id } = useParams();
	const [assignments, setAssignments] = useState([]);
	const onLoad = async () => {
		if (user.role === 0) {
			await StudentCourseAssignments(group_id, course_id)
				.then((data) => {
					setAssignments(data);
				})
				.catch(console.log("Settings Assignments Failed"));
		} else if (user.role === 1) {
			await TeacherCourseAssignments(group_course_id)
				.then((data) => {
					setAssignments(data);
				})
				.catch(console.log("Settings Assignments Failed"));
		}
	};
	useEffect(() => {
		onLoad();
	}, []);

	return (
		<Course>
			<h3>Assignments</h3>
			{assignments !== undefined && (
				<Grid container spacing={5} justifyContent="center" alignItems="center">
					{assignments.map((course, index) => {
						return (
							<Grid item lg={12} md={12} sm={12} xs={12}>
								<AssignmentCard
									title={course.title}
									description={course.description}
									dueDate={course.due_date}
								/>
							</Grid>
						);
					})}
				</Grid>
			)}
			{(assignments === undefined || assignments.length === 0) && (
				<NotFound title="No Assignments" />
			)}
			{user.role === 1 && (
				<Tooltip title="Create New Assignment" placement="top">
					<Fab
						aria-label="Add"
						className={classes.fab}
						color="primary"
						onClick={handleClickOpen}
					>
						<AddIcon />
					</Fab>
				</Tooltip>
			)}
			<CreateAssignment
				open={open}
				snackOpen={snackOpen}
				setOpen={setOpen}
				handleClickOpen={handleClickOpen}
				handleSnackClick={handleSnackClick}
				handleCloseClick={handleCloseClick}
				handleSnackClose={handleSnackClose}
				handleClose={handleClose}
			/>
		</Course>
	);
}
