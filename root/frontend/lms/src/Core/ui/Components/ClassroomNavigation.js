import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

export default function ClassroomNavigator(props) {
	return (
		<Breadcrumbs aria-label="breadcrumb">
			<Link color="inherit" component={RouterLink} to="/student/classroom">
				Groups
			</Link>
			{props.group_name && (
				<Link
					color="inherit"
					component={RouterLink}
					to={`/student/classroom/group/${props.group_id}/course`}
				>
					{props.group_name}
				</Link>
			)}
			{props.courses && <Link component={RouterLink}>Courses</Link>}
			{props.courseName && (
				<Typography color="textPrimary">CourseName</Typography>
			)}
		</Breadcrumbs>
	);
}
