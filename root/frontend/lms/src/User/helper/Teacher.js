import { API } from "../../backend";
// const user = JSON.parse(localStorage.getItem("jwt")).user;
export const TeacherDashboardInfo = () => {
	return fetch(`${API}/teacher/dashboard`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(JSON.parse(localStorage.getItem("jwt")).user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const TeacherClassroomInfo = () => {
	return fetch(`${API}/teacher/classroom`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(JSON.parse(localStorage.getItem("jwt")).user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const TeacherCourseInfo = (course_id) => {
	console.log("in teacher course info helper")
	return fetch(`${API}/teacher/classroom/course/${course_id}/assignment`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			console.log("IN Teacher COURSE");
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const TeacherAssignmentInfo = (course_id, assignment_id) => {
	return fetch(
		`${API}/teacher/classroom/course/${course_id}/assignment/${assignment_id}`,
		{
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}
	)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const TeacherCreateAssignment = (course_id,user) => {
	return fetch(
		`${API}/teacher/classroom/course/${course_id}/createAssignment`,
		{
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user)
		}
	)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
