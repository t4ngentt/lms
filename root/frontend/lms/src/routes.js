import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Core/Theme";

//importing pages--------------------------->
import Dashboard from "./User/pages/Dashboard";
import Login from "./User/pages/Login";

const Routes = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact strict component={Login}></Route>
					<Route
						path="/student/dashboard"
						exact
						strict
						component={Dashboard}
					></Route>
					<Route
						path="/teacher/dashboard"
						exact
						strict
						component={Dashboard}
					></Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default Routes;
