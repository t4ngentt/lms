import React, { useState, useEffect } from "react";

import Base from "../../Core/ui/Base";
import { GroupInfo, getGroupDetails } from "../helper/Student";
import ClassroomNavigator from "../../Core/ui/Components/ClassroomNavigation";
import { useParams, useLocation } from "react-router";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "100%",
	},
	navigation: {
		marginBottom: "40px",
	},
  TabArea : {
    minHeight : "500px"
  }
}));

export default function Course(props) {
	const classes = useStyles();
	const theme = useTheme();
	const location = useLocation();
	const { group_id, course_id } = useParams();
	const [courseName, setCourseName] = useState();
	const [groupName, setGroupName] = useState();
	const [activeTab, setActiveTab] = React.useState(0);

	const handleChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	const handleChangeIndex = (index) => {
		setActiveTab(index);
	};
	const setGroup = () => {
		if (location.state) {
			setCourseName(location.state.courseName);
			setGroupName(location.state.groupName);
		} else {
			getGroupDetails(group_id).then((data) => {
				setCourseName(data.group_name);
			});
		}
	};

	useEffect(() => {
		// onLoad();
		setGroup();
	}, []);

	return (
		<Base>
			<div className={classes.Greeting}>
				<Typography variant="h4">{courseName}</Typography>
			</div>
			<div className={classes.navigation}>
				<ClassroomNavigator
					group_name={groupName}
					course_name={courseName}
					group_id={group_id}
					course_id={course_id}
				/>
			</div>
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={activeTab}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						aria-label="full width tabs example"
						centered
					>
						<Tab label="Assignments" {...a11yProps(0)} />
						<Tab label="Quizzes" {...a11yProps(1)} />
						<Tab label="Resources" {...a11yProps(2)} />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeTab}
					onChangeIndex={handleChangeIndex}
          className={classes.TabArea}
				>
					<TabPanel value={activeTab} index={0} dir={theme.direction}>
						Item One
					</TabPanel>
					<TabPanel value={activeTab} index={1} dir={theme.direction}>
						Item Two
					</TabPanel>
					<TabPanel value={activeTab} index={2} dir={theme.direction}>
						Item Three
					</TabPanel>
				</SwipeableViews>
			</div>
		</Base>
	);
}
