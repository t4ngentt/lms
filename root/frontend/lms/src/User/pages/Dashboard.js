import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Base from "../../Core/ui/Base";
import {isAutheticated} from "../../Auth/helper/index"
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Dashboard() {
	const { user } = isAutheticated();
	const classes = useStyles();
	return (
		<Base>
			<Typography variant="h4">Good Morning, {user.f_name}</Typography>
			{/* <Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={3}
			>
				<Grid item lg={6}>
					<Grid item lg={6}>
						<Typography variant="h5">Events</Typography>
					</Grid>
					<Grid Container direction="column" spacing={3}>
						<Grid item>
							<Paper className={classes.paper}>
								<Paper>Hello there</Paper>
							</Paper>
						</Grid>
						<Grid item>
							<Paper className={classes.paper}>Hello there</Paper>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={6}>
					<Grid container direction="column">
						<Grid item>
							<Grid Container direction="column">
								<Grid item>
									<Paper className={classes.paper}>Hello there</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid Container direction="column">
								<Grid item>
									<Paper className={classes.paper}>Hello there</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid> */}
		</Base>
	);
}
