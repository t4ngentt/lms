import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link} from "react-router-dom";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	description: {
		fontSize: 14,
		height: "10rem",
	},
	pos: {
		marginBottom: 12,
	},
	goToButton: {
		width: "100%",
	},
});

export default function Course(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root} variant="outlined">
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
			</CardContent>
			<Divider />
			<CardActions>
				<Button
					variant="contained"
					color="primary"
					size="small"
					className={classes.goToButton}
					endIcon={<ArrowRightAltIcon />}
					component={Link}
					to={{
						pathname: `/${
							JSON.parse(localStorage.getItem("jwt")).user.userRole
						}/classroom/course/${props.course_id}/assignment`,
						data: `${props.name}`,
					}}
				>
					Go to Course
				</Button>
			</CardActions>
		</Card>
	);
}
