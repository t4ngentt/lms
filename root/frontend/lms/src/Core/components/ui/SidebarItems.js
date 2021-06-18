import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, NavLink} from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";
import { signout } from "../../../Auth/helper/index";
// icons --->
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SchoolIcon from "@material-ui/icons/School";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
	activeItem: {
		color: theme.palette.primary.dark,
	},
}));

function ListItems() {
	const classes = useStyles();
	const handleSignOut = () => {
		signout();
	};
	return (
		<div>
			<ListItem
				button
				key="Home"
				component={NavLink}
				activeClassName={classes.activeItem}
				to={
					"/" +
					JSON.parse(localStorage.getItem("jwt")).user.userRole +
					"/dashboard"
				}
			>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>
			<ListItem
				button
				component={NavLink}
				activeClassName={classes.activeItem}
				to={
					"/" +
					JSON.parse(localStorage.getItem("jwt")).user.userRole +
					"/profile"
				}
			>
				<ListItemIcon>
					<AccountBoxIcon />
				</ListItemIcon>
				<ListItemText primary="Profile" />
			</ListItem>
			<ListItem
				button
				component={NavLink}
				activeClassName={classes.activeItem}
				to={
					"/" +
					JSON.parse(localStorage.getItem("jwt")).user.userRole +
					"/classroom"
				}
			>
				<ListItemIcon>
					<SchoolIcon />
				</ListItemIcon>
				<ListItemText primary="Classroom" />
			</ListItem>
			<ListItem
				button
				component={NavLink}
				activeClassName={classes.activeItem}
				to={
					"/" +
					JSON.parse(localStorage.getItem("jwt")).user.userRole +
					"/forums"
				}
			>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Forums" />
			</ListItem>
			<ListItem
				button
				component={NavLink}
				activeClassName={classes.activeItem}
				to={
					"/" +
					JSON.parse(localStorage.getItem("jwt")).user.userRole +
					"/resources"
				}
			>
				<ListItemIcon>
					<LibraryBooksIcon />
				</ListItemIcon>
				<ListItemText primary="Resources" />
			</ListItem>
			<ListItem button component={Link} to="/" onClick={handleSignOut}>
				<ListItemIcon>
					<ExitToAppIcon />
				</ListItemIcon>
				<ListItemText primary="LogOut" />
			</ListItem>
		</div>
	);
}

export default ListItems;
