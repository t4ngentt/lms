import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

//importing pages--------------------------->
import Login from "./User/pages/Login";
import Dashboard from "./User/pages/Dashboard";
import Profile from "./User/pages/Profile";
import Classroom from "./User/pages/Classroom";
import Forums from "./User/pages/Forums";
import Resources from "./User/pages/Resources";
import Calendar from "./User/pages/Calendar";
import Events from "./User/pages/Events";
import Attendance from "./User/pages/Attendance";
import { CustomThemeContext } from "./Core/CustomThemeContext";
const Routes = () => {
	return (
		<CustomThemeContext>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact strict component={Login}></Route>
					{/* Student Specific Routes-----------------------> */}
					<Route
						path="/student/dashboard"
						exact
						strict
						component={Dashboard}
					></Route>
					<Route
						path="/student/profile"
						exact
						strict
						component={Profile}
					></Route>
					<Route
						path="/student/classroom"
						exact
						strict
						component={Classroom}
					></Route>
					<Route path="/student/forums" exact strict component={Forums}></Route>
					<Route
						path="/student/resources"
						exact
						strict
						component={Resources}
					></Route>
					<Route
						path="/student/calendar"
						exact
						strict
						component={Calendar}
					></Route>
					<Route path="/student/events" exact strict component={Events}></Route>
					<Route
						path="/student/attendance"
						exact
						strict
						component={Attendance}
					></Route>

					{/* Teacher Specific Routes---------------------------> */}
					<Route
						path="/teacher/dashboard"
						exact
						strict
						component={Dashboard}
					></Route>
					<Route
						path="/teacher/profile"
						exact
						strict
						component={Profile}
					></Route>
					<Route
						path="/teacher/classroom"
						exact
						strict
						component={Classroom}
					></Route>
					<Route path="/teacher/forums" exact strict component={Forums}></Route>
					<Route
						path="/teacher/resources"
						exact
						strict
						component={Resources}
					></Route>
					<Route
						path="/teacher/calendar"
						exact
						strict
						component={Calendar}
					></Route>
					<Route path="/teacher/events" exact strict component={Events}></Route>
					<Route
						path="/teacher/attendance"
						exact
						strict
						component={Attendance}
					></Route>
				</Switch>
			</BrowserRouter>
		</CustomThemeContext>
	);
};

export default Routes;
