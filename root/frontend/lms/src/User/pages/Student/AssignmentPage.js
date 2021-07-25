import React, { useState, useEffect } from "react";
import { getUser } from "../../../Auth/helper/index";
import { useParams, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { AssignmentInfo } from "../../helper/General";
import { StudentSubmitAssignment } from "../../helper/Student";
import { Typography, Button, Divider } from "@material-ui/core";
import { format } from "date-fns";
import Course from "../Common/Course";

const useStyles = makeStyles((theme) => ({
	noAssignments: {},
	uploadButton: {
		marginLeft: "auto",
	},
	editButton: {
		float: "right",
		marginRight: "2%",
	},
	submitButton: {
		marginLeft: "2%",
		marginRight: "1%",
	},
	buttonContainer: {
		display: "flex",
		marginTop: "2rem",
	},
	input: {
		display: "none",
	},
	divider: {
		margin: "1rem 0 ",
	},
}));
export default function AssignmentPage() {
	const classes = useStyles();
	const { user } = getUser();
	const [files, setFiles] = useState();
	const { assignment_id } = useParams();
	const [assignmentInfo, setAssignmentInfo] = useState({});
	const handleFileChange = (event) => {
		console.log(event.target.files[0]);
		setFiles(event.target.files[0]);
	};

	const onSubmit = () => {
		StudentSubmitAssignment(files, assignment_id)
			.then((message) => console.log(message))
			.catch((error) => {
				console.log(error);
			});
	};

	const onLoad = async () => {
		await AssignmentInfo(assignment_id)
			.then((data) => {
				setAssignmentInfo(data);
			})
			.catch(console.log("Setting Assignment Info Failed"));
	};
	useEffect(() => {
		onLoad();
	}, []);
	return (
		<Course>
			<Typography variant="h5">{assignmentInfo.title} </Typography>
			<Divider className={classes.divider} />
			<Typography>{assignmentInfo.description}</Typography>
			<Divider className={classes.divider} />
			<Typography>Min Marks : {assignmentInfo.min_marks}</Typography>
			<Typography>Min Marks : {assignmentInfo.max_marks}</Typography>
			<Divider className={classes.divider} />
			<Typography>
				Due Date :{" "}
				{assignmentInfo.due_date &&
					format(new Date(assignmentInfo.due_date), "dd-LL-yyyy HH:mm:ss")}
			</Typography>
			{user.role === 0 ? (
				<div className={classes.buttonContainer}>
					<label>Submitted Files : {files !== undefined && files.name}</label>
					<input
						accept="/*"
						className={classes.input}
						id="icon-button-file"
						type="file"
						name="file"
						onChange={handleFileChange}
					/>
					<label htmlFor="icon-button-file" className={classes.uploadButton}>
						<Button variant="outlined" color="default" component="span">
							Upload
						</Button>
					</label>
					<Button
						variant="contained"
						color="primary"
						className={classes.submitButton}
						onClick={onSubmit}
					>
						Submit
					</Button>
				</div>
			) : (
				<div></div>
			)}
		</Course>
	);
}
