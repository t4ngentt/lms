import { API } from "../../backend";

export const classroomInfo = () => {
	const data = { prn: JSON.parse(localStorage.getItem("jwt")).user.user_id };
	console.log(data);
	return fetch(`${API}/student/classroom/group`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer `,
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const GroupInfo = (group_id) => {
	return fetch(`${API}/student/classroom/group/${group_id}/course`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt")).token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
