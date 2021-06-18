import React from "react";
import Base from "../../Core/components/ui/Base";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
	header: {
		boxShadow: "none",
		padding: "0",
	},
	courseContainer: {
		paddingTop: "2rem",
	},
	root: {
		flexGrow: 1,
	},
	tabs: {
		textTransform: "none",
	},
}));

function Course({ courseName, children }) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		if (
			window.location.pathname === "/student/classroom/course/assignments" &&
			value !== 0
		) {
			setValue(0);
		} else if (
			window.location.pathname === "/student/classroom/course/quizzes" &&
			value !== 1
		) {
			setValue(1);
		} else if (
			window.location.pathname === "/student/classroom/course/resources" &&
			value !== 2
		) {
			setValue(2);
		}
	}, [value]);
	return (
		<Base>
			<AppBar position="static" color="transparent" className={classes.header}>
				<Toolbar variant="dense" disableGutters>
					<Typography variant="h4" color="inherit">
						{courseName}
					</Typography>
				</Toolbar>
			</AppBar>
			<Divider />
			{/* <Paper className={classes.root}> */}
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab
					label="Assignments"
					className={classes.tabs}
					component={Link}
					to="/student/classroom/course/assignments"
				/>
				<Tab
					label="Quizzes"
					className={classes.tabs}
					component={Link}
					to="/student/classroom/course/quizzes"
				/>
				<Tab
					label="Resources"
					className={classes.tabs}
					component={Link}
					to="/student/classroom/course/resources"
				/>
			</Tabs>
			{/* </Paper> */}
			{children}
		</Base>
	);
}

export default Course;
