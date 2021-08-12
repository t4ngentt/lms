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

export default function UnitCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.cardContainer}>
			<CardActionArea
				className={classes.cardContainer}
				component={Link}
				to={{
					pathname: `/teacher/attendance/group_course/${props.group_course_id}/unit/${props.unit_id}/lecture`,
					state: {
						groupName: `${props.group_name}`,
						courseName: `${props.course_name}`,
					},
				}}
			>
				<CardContent>
					<Typography variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography
						className={classes.details}
						color="textSecondary"
						gutterBottom
					>
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
