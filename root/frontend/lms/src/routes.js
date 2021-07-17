import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import { StudentRoute, TeacherRoute } from "./Auth/helper/PrivateRoutes";
import { CustomThemeContext } from "./Core/CustomThemeContext";
//importing Student Pages ------------------------------------------->
import Login from "./User/pages/Login";
import Dashboard from "./User/pages/Dashboard";
import Profile from "./User/pages/Profile";
import Classroom from "./User/pages/Classroom";
import GroupCourses from "./User/pages/GroupCourses";
import CourseAssignment from "./User/pages/CourseAssignment";
import CourseQuiz from "./User/pages/CourseQuiz";
import CourseResource from "./User/pages/CourseResource";
import Forums from "./User/pages/Forums";
import Resources from "./User/pages/Resources";
import Calendar from "./User/pages/Calendar";
import Events from "./User/pages/Events";
import Attendance from "./User/pages/Attendance";
import Settings from "./User/pages/Settings";
import PageNotFound from "./User/pages/Common/PageNotFound";

//importing Teacher Pages ---------------------------------------------->
import TeacherClassroom from "./User/pages/Teacher/TeacherClassroom";

const Routes = () => {
	return (
		<CustomThemeContext>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact strict component={Login}></Route>
					{/* Student Specific Routes--------------------------------------------------------> */}
					<StudentRoute
						path="/student/dashboard"
						exact
						strict
						component={Dashboard}
					></StudentRoute>
					<StudentRoute
						path="/student/profile"
						exact
						strict
						component={Profile}
					></StudentRoute>
					<StudentRoute
						path="/student/classroom"
						exact
						strict
						component={Classroom}
					></StudentRoute>
					<StudentRoute
						path="/student/classroom/group/:group_id/course"
						exact
						strict
						component={GroupCourses}
					></StudentRoute>
					<StudentRoute
						path="/student/classroom/group/:group_id/course/:course_id/assignment"
						exact
						strict
						component={CourseAssignment}
					></StudentRoute>
					<StudentRoute
						path="/student/classroom/group/:group_id/course/:course_id/quiz"
						exact
						strict
						component={CourseQuiz}
					></StudentRoute>
					<StudentRoute
						path="/student/classroom/group/:group_id/course/:course_id/resource"
						exact
						strict
						component={CourseResource}
					></StudentRoute>
					<StudentRoute
						path="/student/forums"
						exact
						strict
						component={Forums}
					></StudentRoute>
					<StudentRoute
						path="/student/resources"
						exact
						strict
						component={Resources}
					></StudentRoute>
					<StudentRoute
						path="/student/calendar"
						exact
						strict
						component={Calendar}
					></StudentRoute>
					<StudentRoute
						path="/student/events"
						exact
						strict
						component={Events}
					></StudentRoute>
					<StudentRoute
						path="/student/attendance"
						exact
						strict
						component={Attendance}
					></StudentRoute>
					<StudentRoute
						path="/student/settings"
						exact
						strict
						component={Settings}
					></StudentRoute>

					{/* Teacher Specific Routes--------------------------------------------------------> */}
					<TeacherRoute
						path="/teacher/dashboard"
						exact
						strict
						component={Dashboard}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/profile"
						exact
						strict
						component={Profile}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/classroom"
						exact
						strict
						component={TeacherClassroom}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/forums"
						exact
						strict
						component={Forums}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/resources"
						exact
						strict
						component={Resources}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/calendar"
						exact
						strict
						component={Calendar}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/events"
						exact
						strict
						component={Events}
					></TeacherRoute>
					<TeacherRoute
						path="/teacher/attendance"
						exact
						strict
						component={Attendance}
					></TeacherRoute>
					<Route to="*" component={PageNotFound}></Route>
				</Switch>
			</BrowserRouter>
		</CustomThemeContext>
	);
};

export default Routes;
