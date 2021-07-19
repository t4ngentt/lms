import React from "react";
import { getUser } from "../../../Auth/helper/index";
import { Typography, Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
export default function ClassroomNavigator(props) {
	const userRole = getUser().user.role;

	return (
		<Breadcrumbs aria-label="breadcrumb">
			{userRole === 0 && (
				<Link color="inherit" component={RouterLink} to="/student/classroom">
					Groups
				</Link>
			)}
			{userRole === 1 && (
				<Link color="inherit" component={RouterLink} to="/teacher/classroom">
					Courses
				</Link>
			)}
			{userRole === 0
				? props.group_name && (
						<Link
							color="inherit"
							component={RouterLink}
							to={`/${userRole === 0 ? "student" : "teacher"}/classroom/group/${
								props.group_id
							}/course`}
						>
							{props.group_name}
						</Link>
				  )
				: props.group_name && <Typography>{props.group_name}</Typography>}
			{userRole === 0
				? props.course_name && (
						<Link
							component={RouterLink}
							to={`/student/classroom/group/${props.group_id}/course/${props.course_id}/assignment`}
						>
							{props.course_name}
						</Link>
				  )
				: props.course_name && (
						<Link
							component={RouterLink}
							to={`/teacher/classroom/course/${props.group_course_id}/assignment`}
						>
							{props.course_name}
						</Link>
				  )}
			{}
		</Breadcrumbs>
	);
}
