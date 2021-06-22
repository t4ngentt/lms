import React from "react";

import Header from "../ui/Components/Header";
import Sidebar from "../ui/Components/Sidebar";
export default function Base() {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const closeDrawer = () => {
		setMobileOpen(false);
	};
	return (
		<React.Fragment>
			<Header handleDrawerToggle={handleDrawerToggle} />
			<Sidebar
				handleDrawerToggle={handleDrawerToggle}
				closeDrawer={closeDrawer}
				isOpen={mobileOpen}
			/>
		</React.Fragment>
	);
}
