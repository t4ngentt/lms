import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { isAutheticated } from "../../../Auth/helper/index";
export default function ClassroomNavigator(props) {
	const userRole = isAutheticated().user.role;

	return (
		<Breadcrumbs aria-label="breadcrumb">
			{isAutheticated() && isAutheticated().user.role === 0 && (
				<Link color="inherit" component={RouterLink} to="/student/classroom">
					Groups
				</Link>
			)}
			{isAutheticated() && isAutheticated().user.role === 1 && (
				<Link color="inherit" component={RouterLink} to="/teacher/classroom">
					Courses
				</Link>
			)}
			{props.group_name && (
				<Link
					color="inherit"
					component={RouterLink}
					to={`/${userRole === 0 ? "student" : "teacher"}/classroom/group/${
						props.group_id
					}/course`}
				>
					{props.group_name}
				</Link>
			)}
			{props.course_name && (
				<Link
					component={RouterLink}
					to={`/${userRole === 0 ? "student" : "teacher"}/classroom/group/${
						props.group_id
					}/course/${props.course_id}/assignment`}
				>
					{props.course_name}
				</Link>
			)}
		</Breadcrumbs>
	);
}
