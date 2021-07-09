import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Base from "../../Core/ui/Base";
import ClassroomCard from "../../Core/ui/Components/ClassroomCard";
const useStyles = makeStyles((theme) => ({
	Greeting: {
		marginBottom: "40px",
	},
}));

export default function Classroom() {
	const classes = useStyles();
	return (
		<Base>
			<div className={classes.Greeting}>
				<Typography variant="h4">Classroom</Typography>
			</div>
			<Grid container spacing={5}
			justifyContent="center"
			alignItems="center">
				<Grid item>
					<ClassroomCard />
				</Grid>
				<Grid item>
					<ClassroomCard />
				</Grid>
				<Grid item>
					<ClassroomCard />
				</Grid>
				<Grid item>
					<ClassroomCard />
				</Grid>
				<Grid item>
					<ClassroomCard />
				</Grid>
			</Grid>
		</Base>
	);
}
