import React, { useState, useEffect } from "react";
import { getUser } from "../../../Auth/helper/index";
import { useParams, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { StudentCourseAssignments } from "../../helper/Student";
import { TeacherCourseAssignments } from "../../helper/Teacher";
import Course from "../Common/Course";
import NotFound from "../Common/NotFound";
import { Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
	noAssignments: {},
}));
const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "firstName",
		headerName: "First name",
		width: 150,
		editable: true,
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 150,
		editable: true,
	},
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 110,
		editable: true,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.getValue(params.id, "firstName") || ""} ${
				params.getValue(params.id, "lastName") || ""
			}`,
	},
];
const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function TeacherViewSubmissions() {
	const classes = useStyles();
	const location = useLocation();
	const { user } = getUser();
	const { group_id, course_id, group_course_id } = useParams();
	const [navigationDetails, setNaviagtionDetails] = useState({
		groupName: "",
		courseName: "",
	});
	const [assignments, setAssignments] = useState([]);
	const onLoad = async () => {
		if (user.role === 0) {
			await StudentCourseAssignments(group_id, course_id)
				.then((data) => {
					setAssignments(data);
				})
				.catch(console.log("Settings Assignments Failed"));
		} else if (user.role === 1) {
			await TeacherCourseAssignments(group_course_id)
				.then((data) => {
					setAssignments(data);
				})
				.catch(console.log("Settings Assignments Failed"));
		}
	};
	const setNavigationDetails = () => {
		if (location.state) {
			setNaviagtionDetails({
				groupName: location.state.groupName,
				courseName: location.state.courseName,
			});
		}
		// } else {
		// 	getGroupDetails(group_id).then((data) => {
		// 		setNaviagtionDetails(data.group_name);
		// 	});
		// }
	};
	useEffect(() => {
		setNavigationDetails();
		onLoad();
	}, []);

	return (
		<Course>
			<h3>Submissions</h3>
			{(assignments === undefined || assignments.length === 0) && (
				<NotFound title="No Submissions Yet!" />
			)}
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					disableSelectionOnClick
				/>
			</div>
		</Course>
	);
}
