import React from "react";
//importing components from material ui----------------------------->
import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Typography,
	Badge,
} from "@material-ui/core";

//importing Icons from material ui---------------------------->
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";

//importing styles from material-ui/styles ----------------------->
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: `linear-gradient(to right,${theme.palette.primary.main} , ${theme.palette.secondary.main})`,
		zIndex: theme.zIndex.modal + 1,
		boxShadow: "none",
	},
	rightItems: {
		marginLeft: "auto",
	},
	appLogo: {
		color: theme.palette.common.white,
	},
	logoButton: {
		"&:hover": {
			background: "none",
		},
	},
	menuButton: {
		marginRight: "1px",
		marginLeft: "-10px", //theme.spacing(2)
		padding: "0",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export default function Header(props) {
	const classes = useStyles();
	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="black"
					aria-label="open drawer"
					edge="start"
					onClick={props.handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Button disableRipple className={classes.logoButton}>
					<Typography variant="h6" className={classes.appLogo}>
						ProjectCCP
					</Typography>
				</Button>
				<IconButton className={classes.rightItems}>
					<Badge badgeContent={4} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
