import React, { useEffect, useState } from "react";
import Base from "../../Core/components/ui/Base";
import Feed from "../../Core/components/ui/Feed";
import ProfileFeed from "../../Core/components/ui/ProfileFeed";
// importing components from material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { StudentDashboardInfo } from "../helper/Student";
import { TeacherDashboardInfo } from "../helper/Teacher";
const useStyles = makeStyles((theme) => ({
	header: {
		boxShadow: "none",
		padding: "0",
	},
	FeedContainer: {
		padding: "2rem",
	},
	feedItems: {
		margin: "15px",
	},
	ProfileItem: {},
	ProfileContainer: {
		padding: "15px",
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const theme = useTheme();
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
	});
	const onLoad = () => {
		if (JSON.parse(localStorage.getItem("jwt")).user.role === 0) {
			StudentDashboardInfo()
				.then((data) => {
					setUser(data[0]);
				})
				.catch(console.log("signin request failed"));
		} else if (JSON.parse(localStorage.getItem("jwt")).user.role === 1) {
			TeacherDashboardInfo()
				.then((data) => {
					setUser(data[0]);
				})
				.catch(console.log("signin request failed"));
		}
	};
	useEffect(() => {
		onLoad();
	}, []);
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Base>
			<AppBar position="static" color="transparent" className={classes.header}>
				<Toolbar variant="dense" disableGutters>
					<Typography variant="h4" color="inherit">
						Welcome {user.firstName} {user.lastName}
					</Typography>
				</Toolbar>
			</AppBar>
			<Divider />
			<Grid
				container
				spacing={3}
				direction={matches ? "column-reverse" : "row"}
				className={classes.FeedContainer}
			>
				<Grid Item lg={6} md={6} sm={12}>
					<Grid
						Container
						spacing={3}
						direction="column"
						justify="center"
						alignItems="flex-end"
					>
						<Grid Item className={classes.feedItems}>
							<Feed />
						</Grid>
						<Grid Item className={classes.feedItems}>
							<Feed />
						</Grid>
						<Grid Item className={classes.feedItems}>
							<Feed />
						</Grid>
					</Grid>
				</Grid>
				<Grid Item lg={6} md={6} sm={12}>
					<Grid
						Container
						spacing={3}
						direction="column"
						justify="center"
						alignItems="flex-end"
						className={classes.ProfileContainer}
					>
						<Grid Item className={classes.ProfileItem}>
							<ProfileFeed user={user} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Base>
	);
}
