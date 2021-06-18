import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
//social media icons---->
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		borderWidth: "2px",
		height: "20rem",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	description: {
		fontSize: 14,
		height: "6rem",
	},
	pos: {
		marginBottom: 12,
	},
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
	ProfileContainer: {
		display: "flex",
		justifyContent: "center",
	},
	iconsContainer: {
		margin: "auto",
	},
}));

export default function ProfileFeed(props) {
	const classes = useStyles();
	const { firstName, lastName } = props.user;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<span className={classes.ProfileContainer}>
					<Avatar className={classes.large}></Avatar>
				</span>
				<Divider />
				<Typography
					className={classes.description}
					color="textSecondary"
					gutterBottom
				>
					{firstName} {lastName}
				</Typography>
			</CardContent>
			<CardActions>
				<span className={classes.iconsContainer}>
					<IconButton aria-label="LinkedInIcon">
						<LinkedInIcon />
					</IconButton>
					<IconButton aria-label="InstagramIcon">
						<InstagramIcon />
					</IconButton>
					<IconButton aria-label="FacebookIcon">
						<FacebookIcon />
					</IconButton>
					<IconButton aria-label="TwitterIcon">
						<TwitterIcon />
					</IconButton>
					<IconButton aria-label="PinterestIcon">
						<PinterestIcon />
					</IconButton>
				</span>
			</CardActions>
		</Card>
	);
}
