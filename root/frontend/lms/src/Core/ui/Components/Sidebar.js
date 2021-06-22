import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItems from "./SidebarItems";
//importing components from material ui--------------------------->
import { Drawer, Hidden, List, CssBaseline } from "@material-ui/core";

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
}));

export default function Sidebar(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div className={classes.root}>
			<CssBaseline />
			<nav className={classes.drawer}>
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={(props.isOpen)}
						onClose={props.handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<div>
							<div className={classes.toolbar} />
							<List onClick={() => props.closeDrawer}>
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
