import { createMuiTheme } from "@material-ui/core/styles";

const col1 = "#9733EE";
const col2 = "#DA22FF";
const col3 = "#F8F8FF";
const col4 = "#FE5BD6";
const col5 = "#f49d6e"

export default createMuiTheme({
	palette: {
		type : "light",
		common: {
			white: `${col3}`,
		},
		primary: {
			main: `${col1}`,
		},
		secondary: {
			main: `${col2}`,
		},
	},
});
