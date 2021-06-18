import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signin, authenticate, isAutheticated } from "../Auth/helper/index";
import { LinearProgress } from "@material-ui/core";
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link to="">ProjectCCP</Link> {new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	progressBar: {
		marginTop: "50%",
	},
}));

export default function SignIn() {
	const classes = useStyles();

	const [values, setValues] = useState({
		Email: "",
		Password: "",
		error: "",
		loading: false,
		didRedirect: false,
	});

	const { Email, Password, error, loading, didRedirect } = values;
	const { user } = isAutheticated();

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const performRedirect = () => {
		if (didRedirect) {
			console.log(user);
			if (user && user.role === 1) {
				return <Redirect to="/teacher/dashboard" />;
			} else if (user && user.role === 0) {
				return <Redirect to="/student/dashboard" />;
			}
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });
		signin({ Email, Password })
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
				<Grid conatiner justify="center" alignItems="center">
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
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={Email}
							onChange={handleChange("Email")}
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
							autoComplete="current-password"
							value={Password}
							onChange={handleChange("Password")}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							// component={Link}
							// to="/student/dashboard"
							onClick={onSubmit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link to="/forgotpassword">Forgot password?</Link>
							</Grid>
							<Grid item>
								<Link to="/signup">Don't have an account? Sign Up</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
				{/* <p>{JSON.stringify(values)}</p> */}
				{performRedirect()}
			</Container>
		</React.Fragment>
	);
}
