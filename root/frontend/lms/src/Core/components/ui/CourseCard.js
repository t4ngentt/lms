import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		position: "relative",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	description: {
		fontSize: 14,
		height: "5rem",
	},
	pos: {
		marginBottom: 12,
	},
	appBar: {
		position: "relative",
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
	markButton: {
		marginLeft: "auto",
	},
}));


export default function CourseCard(props) {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root} variant="outlined">
				<CardActionArea
					component={Link}
					to={`/${
						JSON.parse(localStorage.getItem("jwt")).user.userRole
					}/classroom/course/${props.course_id}/assignment/${
						props.assignment_id
					}`}
				>
					<CardContent>
						<Typography variant="h6">{props.name}</Typography>
						<Divider />
						<Typography
							className={classes.description}
							color="textSecondary"
							gutterBottom
						>
							{props.description}
						</Typography>
						<Toolbar disableGutters>
							<h4>Due Date : {props.dueDate}</h4>
							{JSON.parse(localStorage.getItem("jwt")).user.role === 0 && <span className={classes.markButton}>
								<Tooltip title="Submitted" placement="top">
									<CheckIcon style={{ color: "green" }} />
								</Tooltip>
							</span>}
						</Toolbar>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
