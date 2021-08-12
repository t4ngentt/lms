import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardContent,
	Typography,
	CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles({
	cardContainer: {
		minHeight: "50px",
	},
	details: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function LectureCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.cardContainer}>
			<CardActionArea
				component={Link}
				to={{
					pathname: `/teacher/attendance/group_course/${props.group_course_id}/unit/${props.unit_id}/lecture/${props.lecture_id}`,
					state: {
						groupName: `${props.groupName}`,
						courseName: `${props.courseName}`,
					},
				}}
			>
				<CardContent>
					<Typography variant="h5" component="h2">
						{props.lecture_number}. {props.topic}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
