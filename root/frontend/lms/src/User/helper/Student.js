import { API } from "../../backend";
import { refreshAccess, getUser } from "../../Auth/helper/index";
export const classroomInfo = () => {
	const data = { prn: JSON.parse(localStorage.getItem("jwt")).user.prn };
	console.log(data);
	return fetch(`${API}/student/classroom/group`, {
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

export const GroupInfo = (group_id) => {
	return fetch(`${API}/student/classroom/group/${group_id}/course`, {
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
				return res.json();
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getGroupDetails = (group_id) => {
	return fetch(`${API}/groupDetails/${group_id}`, {
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
				return res.json();
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
