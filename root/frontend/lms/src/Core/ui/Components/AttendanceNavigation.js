import React from "react";
import { getUser } from "../../../Auth/helper/index";
import { Typography, Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

export default function AttendanceNavigator(props) {
	const userRole = getUser().user.role;

	return (
		<Breadcrumbs aria-label="ClassRoom Navigation">
			{userRole === 0 && (
				<Link color="inherit" component={RouterLink} to="/student/attendance">
					Groups
				</Link>
			)}
			{userRole === 1 && (
				<Link color="inherit" component={RouterLink} to="/teacher/attendance">
					Courses
				</Link>
			)}
			{userRole === 0
				? props.group_name && (
						<Link
							color="inherit"
							component={RouterLink}
							to={`/student/attendance/group/${props.group_id}/course`}
						>
							{props.group_name}
						</Link>
				  )
				: props.group_name && <Typography>{props.group_name}</Typography>}
			{userRole === 0
				? props.course_name && (
						<Link
							component={RouterLink}
							to={{
								pathname: `/student/attendance/group/${props.group_id}/course/${props.course_id}/resource`,
								state: {
									groupName: `${props.group_name}`,
									courseName: `${props.course_name}`,
								},
							}}
							color="inherit"
						>
							{props.course_name}
						</Link>
				  )
				: props.course_name && (
						<Link
							component={RouterLink}
							color="inherit"
							to={{
								pathname: `/teacher/attendance/course/${props.group_course_id}`,
								state: {
									groupName: `${props.group_name}`,
									courseName: `${props.course_name}`,
								},
							}}
						>
							{props.course_name}
						</Link>
				  )}
		</Breadcrumbs>
	);
}
