import React from "react";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItems from "./SidebarItems";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import ProfileDropDown from "./ProfileDropDown";
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		// backgroundColor : "#90caf9",
		zIndex: theme.zIndex.modal + 1,
		boxShadow: "none",
	},
	menuButton: {
		marginRight: "1px",
		marginLeft: "-10px", //theme.spacing(2)
		padding: "0",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar

	toolbar: theme.mixins.toolbar,

	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	logoButton: {
		"&:hover": {
			backgroundColor: "transparent",
		},

		flexGrow: 1,
		display: "inline-block",
	},
	avatarIcon: {
		marginLeft: "15px",
		backgroundColor: theme.palette.primary.dark, //"#ff2e63"
	},
	notificationIcon: {
		marginBottom: "-5px",
		[theme.breakpoints.down("sm")]: {
			position: "relative",
			right: "12px",
		},
	},
	logoText: {
		padding: "0",
		[theme.breakpoints.down("sm")]: {
			variant: "none",
		},
	},
}));

function Sidebar(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" w className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="black"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>

					<Button
						disableRipple
						className={classes.logoButton}
						component={Link}
						to={
							"/" +
							JSON.parse(localStorage.getItem("jwt")).user.userRole +
							"/dashboard"
						}
					>
						<Typography variant="h6" className={classes.logoText}>
							ProjectCCP
						</Typography>
					</Button>
					<IconButton color="inherit" className={classes.notificationIcon}>
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<ProfileDropDown
						userRole={JSON.parse(localStorage.getItem("jwt")).user.userRole}
					/>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<div>
							<div className={classes.toolbar} />
							<List onClick={() => setMobileOpen(false)}>
								<ListItems role={props.role} />
							</List>
						</div>
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						<div>
							<div className={classes.toolbar} />
							<List>
								<ListItems />
							</List>
						</div>
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

export default Sidebar;
