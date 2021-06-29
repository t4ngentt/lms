import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// icons --->
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SchoolIcon from "@material-ui/icons/School";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventIcon from "@material-ui/icons/Event";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({
	activeItem: {
		color: theme.palette.primary.dark,
	},
}));

function ListItems() {
	const classes = useStyles();
	// const handleSignOut = () => {
	// 	signout();
	// };
	return (
		<div>
			<ListItem
				button
				key="Home"
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/dashboard"
				// }
			>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/profile"
				// }
			>
				<ListItemIcon>
					<AccountBoxIcon />
				</ListItemIcon>
				<ListItemText primary="Profile" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/classroom"
				// }
			>
				<ListItemIcon>
					<SchoolIcon />
				</ListItemIcon>
				<ListItemText primary="Classroom" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/forums"
				// }
			>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Forums" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/resources"
				// }
			>
				<ListItemIcon>
					<LibraryBooksIcon />
				</ListItemIcon>
				<ListItemText primary="Resources" />
			</ListItem>
			<Divider />
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/calendar"
				// }
			>
				<ListItemIcon>
					<CalendarTodayIcon />
				</ListItemIcon>
				<ListItemText primary="Calendar" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/events"
				// }
			>
				<ListItemIcon>
					<EventIcon />
				</ListItemIcon>
				<ListItemText primary="Events" />
			</ListItem>
			<ListItem
				button
				// component={NavLink}
				activeClassName={classes.activeItem}
				// to={
				// 	"/" +
				// 	JSON.parse(localStorage.getItem("jwt")).user.userRole +
				// 	"/events"
				// }
			>
				<ListItemIcon>
					<EventAvailableIcon />
				</ListItemIcon>
				<ListItemText primary="Attendance" />
			</ListItem>
			<Divider />
			<ListItem button component={Link} to="/">
				<ListItemIcon>
					<ExitToAppIcon />
				</ListItemIcon>
				<ListItemText primary="LogOut" />
			</ListItem>
		</div>
	);
}

export default ListItems;
