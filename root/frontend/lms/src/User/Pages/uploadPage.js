import React from "react";
import Base from "../../Core/components/ui/Base";
// importing components from material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	uploadButton: {
		marginLeft: "auto",
	},
	editButton: {
		float: "right",
		marginRight: "2%",
	},
	submitButton: {
		marginLeft: "2%",
		marginRight: "1%",
	},
	buttonContainer: {
		display: "flex",
	},
	input: {
		display: "none",
	},
}));

export default function UploadPage() {
	const classes = useStyles();
	return (
		<Base>
			<Button variant="contained">Upload</Button>
		</Base>
	);
}
