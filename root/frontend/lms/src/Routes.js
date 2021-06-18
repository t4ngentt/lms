import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./User/Pages/Dashboard";
import Profile from "./User/Pages/Profile";
import Classroom from "./User/Pages/Classroom";
import Resources from "./User/Pages/Resources";
import Forums from "./User/Pages/Forums";
import CourseAssignment from "./User/Pages/CourseAssignment";
import Quiz from "./User/Pages/Quiz";
import ClassResources from "./User/Pages/ClassResource";
import Signup from "./User/Signup";
import Login from "./User/Login";
import ForgotPassword from "./User/ForgotPassword";
// importing Private Routes ------------>
import { StudentRoute, TeacherRoute } from "./Auth/helper/PrivateRoutes";
import Assignment from "./User/Pages/Assignment";
import UploadPage from "./User/Pages/uploadPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact strict component={Login}></Route>
				<Route path="/signup" exact strict component={Signup}></Route>
				<Route path="/upload" exact strict component={UploadPage}></Route>
				<Route
					path="/forgotpassword"
					exact
					strict
					component={ForgotPassword}
				></Route>
				{/* Student Restricted Routes----------------------> */}
				<StudentRoute
					path="/student/classroom/course/:course_id/assignment/:assignment_id"
					exact
					strict
					component={Assignment}
				></StudentRoute>
				<StudentRoute
					path="/student/classroom/course/:course_id/assignment"
					exact
					strict
					component={CourseAssignment}
				></StudentRoute>
				<StudentRoute
					path="/student/classroom/course/quizzes"
					exact
					strict
					component={Quiz}
				></StudentRoute>
				<StudentRoute
					path="/student/classroom/course/resources"
					exact
					strict
					component={ClassResources}
				></StudentRoute>
				<StudentRoute
					path="/student/dashboard"
					exact
					strict
					component={Dashboard}
				></StudentRoute>
				<StudentRoute
					path="/student/classroom"
					exact
					strict
					component={Classroom}
				></StudentRoute>
				<StudentRoute
					path="/student/profile"
					exact
					strict
					component={Profile}
				></StudentRoute>
				<StudentRoute
					path="/student/resources"
					exact
					strict
					component={Resources}
				></StudentRoute>
				<StudentRoute
					path="/student/forums"
					exact
					strict
					component={Forums}
				></StudentRoute>
				{/* Teacher Restricted Routes-----------------------> */}
				<TeacherRoute
					path="/teacher/classroom/course/:course_id/assignment/:assignment_id"
					exact
					strict
					component={Assignment}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/classroom/course/:course_id/assignment"
					exact
					strict
					component={CourseAssignment}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/dashboard"
					exact
					component={Dashboard}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/profile"
					exact
					component={Profile}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/classroom"
					exact
					component={Classroom}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/resources"
					exact
					component={Resources}
				></TeacherRoute>
				<TeacherRoute
					path="/teacher/forums"
					exact
					component={Forums}
				></TeacherRoute>
			</Switch>
		</BrowserRouter>
	);
};
export default Routes;
