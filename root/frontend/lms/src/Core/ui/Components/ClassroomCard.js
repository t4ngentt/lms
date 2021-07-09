import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardContent,
	Typography,
	CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles({
	cardContainer: {
		minWidth: "300px",
		minHeight: "250px",
		textAlign: "center",
	},
	details: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function ClassroomCard() {
	const classes = useStyles();

	return (
		<Card className={classes.cardContainer}>
			<CardActionArea className={classes.cardContainer}>
				<CardContent>
					<Typography variant="h5" component="h2">
						Group-A
					</Typography>
					<Typography
						className={classes.details}
						color="textSecondary"
						gutterBottom
					>
						Details
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
