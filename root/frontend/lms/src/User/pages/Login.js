import React, { useState } from "react";
import { signin, authenticate, isAutheticated } from "../../Auth/helper/index";
import { Redirect } from "react-router-dom";
import {
	Paper,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Button,
	LinearProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit">ProjectCCP</Link> {new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(7),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: " 80px 60px",
		borderRadius: "10px",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	forgot: {
		margin: theme.spacing(3, 0, 2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	Logo: {
		margin: theme.spacing(5),
	},
	formContainer: {
		marginTop: theme.spacing(3),
	},
}));

export default function Login() {
	const classes = useStyles();
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		loading: false,
		didRedirect: false,
	});
	const { email, password, error, loading, didRedirect } = values;
	const { user } = isAutheticated();
	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};
	const performRedirect = () => {
		if (didRedirect) {
			console.log(user);
			<Redirect to="/student/dashboard" />;
			// if (user && user.role === 1) {
			// 	return <Redirect to="/teacher/dashboard" />;
			// } else if (user && user.role === 0) {
			// 	return <Redirect to="/student/dashboard" />;
			// }
		}
	};
	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });
		signin({ email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, loading: false });
				} else {
					authenticate(data, () => {
						setValues({
							...values,
							didRedirect: true,
						});
					});
				}
			})
			.catch(console.log("signin request failed"));
	};
	const loadingMessage = () => {
		return (
			loading && (
				<Grid container justify="center" alignItems="center">
					<Grid Item lg={12}>
						<LinearProgress />
					</Grid>
				</Grid>
			)
		);
	};
	return (
		<React.Fragment>
			{loadingMessage()}
			<div className={classes.Logo}>
				<Typography component="h1" variant="h4">
					PROJECTCCP
				</Typography>
			</div>
			<Grid container justify="center" alignItems="center">
				<Grid item lg={4} md={6} sm={8} xs={10}>
					<Paper className={classes.paper} elevation={3}>
						<Typography component="h1" variant="h5">
							Login Here
						</Typography>
						<form className={classes.formContainer}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								value={email}
								onChange={handleChange("email")}
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={password}
								onChange={handleChange("password")}
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>

							<Grid container direction="row">
								<Grid item lg={6} sm={6} md={6} xs={6}>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
										onClick={onSubmit}
									>
										Log In
									</Button>
								</Grid>
								<Grid
									item
									lg={6}
									sm={6}
									md={6}
									xs={6}
									className={classes.forgot}
								>
									<Link variant="body2">Forgot password?</Link>
								</Grid>
							</Grid>
						</form>
					</Paper>
					<Box mt={8}>
						<Copyright />
					</Box>
				</Grid>
			</Grid>
			{/* <p>{JSON.stringify(values)}</p> */}
			{performRedirect()}
		</React.Fragment>
	);
}
