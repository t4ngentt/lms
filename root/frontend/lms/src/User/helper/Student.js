import { API } from "../../backend";
const token = JSON.parse(localStorage.getItem("jwt"));

export const testapi = (user) => {
	console.log(token.token);
	return fetch(`${API}/user/token_autheticate/`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.token}`,
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
