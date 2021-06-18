import React, { useState, useEffect } from "react";
import "date-fns";
import StudentCourse from "./Course";
import Grid from "@material-ui/core/Grid";
import CourseCard from "../../Core/components/ui/CourseCard";
import { makeStyles } from "@material-ui/core/styles";
import { StudentCourseInfo } from "../helper/Student";
import { useLocation, useParams } from "react-router";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { isAutheticated } from "../../Auth/helper/index";
import CreateAssignment from "../../Core/components/ui/CreateAssignment";
import { TeacherCourseInfo } from "../helper/Teacher";

const useStyles = makeStyles((theme) => ({
	assContainer: {
		marginTop: "15px",
	},
	AssListItem: {
		padding: "15px",
		margin: "auto",
	},
	fab: {
		position: "fixed",
		bottom: theme.spacing(5),
		right: theme.spacing(4),
	},
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	description: {
		fontSize: 14,
		height: "6rem",
	},
	pos: {
		marginBottom: 12,
	},
	appBar: {
		position: "relative",
		width: "100%",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	toolbar: {
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(2),
	},
	button: {
		marginLeft: "8px",
	},
}));

function Assignment(props) {
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
	const { course_id } = useParams();
	const [assignments, setAssignments] = useState([]);
	const location  = useLocation();
	console.log("LOCATION : ",location)
	const onLoad = () => {
		if (JSON.parse(localStorage.getItem("jwt")).user.role === 0) {
			StudentCourseInfo(course_id)
				.then((data) => {
					console.log(data);
					setAssignments(data);
				})
				.catch(console.log("signin request failed"));
		} else if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
			TeacherCourseInfo(course_id)
				.then((data) => {
					console.log(data);
					setAssignments(data);
				})
				.catch(console.log("signin request failed"));
		}
	};
	useEffect(() => {
		onLoad();
	}, []);
	return (
		<StudentCourse courseName={location.data}>
			<Grid
				Container
				direction="column"
				justify="center"
				alignItems="center"
				className={classes.assContainer}
			>
				{assignments.map((assignment, index) => {
					return (
						<Grid item lg={10} className={classes.AssListItem}>
							<CourseCard
								name={assignment.name}
								title={assignment.title}
								description={assignment.description}
								course_id={assignment.course_id}
								assignment_id={assignment.assignment_id}
								dueDate={assignment.dueDate}
							/>
						</Grid>
					);
				})}
			</Grid>
			{isAutheticated().user.role === 1 && (
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
		</StudentCourse>
	);
}

export default Assignment;
