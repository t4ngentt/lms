import { API } from "../../backend";
// const user = JSON.parse(localStorage.getItem("jwt")).user;
export const StudentDashboardInfo = () => {
	return fetch(`${API}/student/dashboard`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(JSON.parse(localStorage.getItem("jwt")).user),
	})
		.then((response) => {
			console.log("IN STUDENT DASHBOARD");
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const StudentClassroomInfo = () => {
	console.log("IN STUDENT Classroom INFO FETCH REQUEST")
	return fetch(`${API}/student/classroom`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(JSON.parse(localStorage.getItem("jwt")).user),
	})
		.then((response) => {
			console.log("IN STUDENT CLASSROOM");
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const StudentCourseInfo = (course_id) => {
	return fetch(`${API}/student/classroom/course/${course_id}/assignment`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const StudentAssignmentInfo = (course_id,assignment_id) =>{
	console.log("IN STUDENT ASSIGNMET INFO FETCH REQUEST")
	return fetch(`${API}/student/classroom/course/${course_id}/assignment/${assignment_id}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			console.log("IN STUDENT ASSIGNMENT");
			return response.json();
		})
		.catch((err) => console.log(err));
}
