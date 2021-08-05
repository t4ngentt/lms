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
		</Card>
	);
}
