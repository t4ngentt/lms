import { API } from "../../backend";
import { refreshAccess, getUser } from "../../Auth/helper/index";
export const TeacherClassroomInfo = () => {
	const data = { teacher_id: JSON.parse(localStorage.getItem("jwt")).user.prn };
	console.log(data);
	return fetch(`${API}/teacher/classroom/courses`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem("jwt")).user.access
			}`,
		},
		body: JSON.stringify(data),
	})
		.then(async (res) => {
			if (res.status === 401) {
				await refreshAccess();
				console.log(res.status);
				window.location.reload(true);
			} else {
				return res.json();
			}
		})
		.catch((err) => console.log(err));
};
export const TeacherCourseAssignments = (group_course_id) => {
	return fetch(
		`${API}/classroom/group_course/${group_course_id}/assignments/`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					JSON.parse(localStorage.getItem("jwt")).user.access
				}`,
			},
		}
	)
		.then(async (res) => {
			if (res.status === 401) {
				await refreshAccess();
				console.log(res.status);
				window.location.reload(true);
			} else {
				return res.json();
			}
		})
		.catch((err) => console.log(err));
};

export const getGroupCourseDetails = (group_course_id) => {
	return fetch(`${API}/group_course_details/${group_course_id}/`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${
				JSON.parse(localStorage.getItem("jwt")).user.access
			}`,
		},
	})
		.then(async (res) => {
			if (res.status === 401) {
				await refreshAccess();
				console.log(res.status);
				window.location.reload(true);
			} else {
				console.log(res)
				return res.json();
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
