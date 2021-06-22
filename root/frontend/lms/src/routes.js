import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Core/Theme"

//importing pages--------------------------->
import Dashboard from "./User/pages/Dashboard";

const Routes = () => {
	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact strict></Route>
					<Route
						path="/student/dashboard"
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
