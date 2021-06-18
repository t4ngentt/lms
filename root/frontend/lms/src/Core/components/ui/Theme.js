import {createMuiTheme} from "@material-ui/core/styles";
const col1 = "#90caf9"
const col2 = "#f48fb1 "  
export default createMuiTheme({
    palette : {
        common : {
            blue : `${col1}`,
            pink : `${col2}`
        },
        primary : {
            main : `${col1}`
        },
        secondary : {
            main : `${col2}`
        }
    }
})