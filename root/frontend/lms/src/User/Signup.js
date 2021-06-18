import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signup } from "../Auth/helper";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="#">
				ProjectCCP
			</Link>{" "}
			{new Date().getFullYear()}
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
}));

export default function SignIn() {
	const classes = useStyles();
	const [values, setValues] = useState({
		First_Name: "",
		Last_Name: "",
		Email: "",
		Password: "",
		ConfirmPassword: "",
		PRN: "",
		error: "",
		success: false,
	});
	const {
		First_Name,
		Last_Name,
		Email,
		Password,
		ConfirmPassword,
		PRN,
		error,
		success,
	} = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};
	const performRedirect = () => {
		if (success) {
			return <Redirect to="/" />;
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({
			First_Name,
			Last_Name,
			Email,
			Password,
			PRN,
		})
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({
						...values,
						First_Name: "",
						Last_Name: "",
						Email: "",
						Password: "",
						ConfirmPassword: "",
						PRN: "",
						error: "",
						success: true,
					});
				}
			})
			.catch();
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<ValidatorForm className={classes.form}>
					<TextField
						type="text"
						variant="outlined"
						margin="normal"
						// required
						fullWidth
						id="First_Name"
						label="First Name"
						name="First_Name"
						// autoFocus
						onChange={handleChange("First_Name")}
						value={First_Name}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="lastName"
						label="Last Name"
						name="lastName"
						onChange={handleChange("Last_Name")}
						value={Last_Name}
					/>
					<TextValidator
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						onChange={handleChange("Email")}
						value={Email}
						validators={["required", "isEmail"]}
						errorMessages={["This Field is Required", "Email is not valid"]}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="prn"
						label="PRN"
						name="prn"
						onChange={handleChange("PRN")}
						value={PRN}
					/>
					<TextValidator
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						onChange={handleChange("Password")}
						value={Password}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Confirm Password"
						type="password"
						id="confirmPassword"
						onChange={handleChange("ConfirmPassword")}
						value={ConfirmPassword}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={onSubmit}
					>
						Sign Up
					</Button>
				</ValidatorForm>

				<p>{JSON.stringify(values)}</p>
			</div>
			<Box mt={2}>
				<Copyright />
			</Box>
			{performRedirect()}
		</Container>
	);
}
