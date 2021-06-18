import React, { useEffect, useState } from "react";
import Base from "../../Core/components/ui/Base";
import { StudentAssignmentInfo } from "../helper/Student";
// importing components from material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider } from "@material-ui/core";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
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
	},
	input: {
		display: "none",
	},
}));

export default function SubmitAssignment() {
	const classes = useStyles();
	const { course_id, assignment_id } = useParams();
	const [info, setInfo] = useState([]);
	const { title, name, description, dueDate } = info;
	const onLoad = () => {
		StudentAssignmentInfo(course_id, assignment_id)
			.then((data) => {
				setInfo(data[0]);
				console.log(info);
			})
			.catch(console.log("signin request failed"));
	};
	useEffect(() => {
		onLoad();
	}, []);
	console.log("INFO : ", info);

	return (
		<Base>
			{/* <h1>{info[0].name}</h1>  */}
			<h1>{name}</h1>
			<Divider />
			<h3>{title}</h3>
			<p>{description}</p>
			<Divider />
			<p>Due Date : {dueDate}</p>
			<Divider />
			<h3>Resources :</h3>
			{JSON.parse(localStorage.getItem("jwt")).user.role === 0 && (
				<div>
					<Divider />
					<h3>Submitted Files : </h3>
					<div className={classes.buttonContainer}>
						<input
							accept="/*"
							className={classes.input}
							id="icon-button-file"
							type="file"
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
						>
							Submit
						</Button>
					</div>
				</div>
			)}
			{JSON.parse(localStorage.getItem("jwt")).user.role === 1 && (
				<Button
					variant="contained"
					color="primary"
					className={classes.editButton}
				>
					Edit
				</Button>
			)}
		</Base>
	);
}
