import React from 'react'
import Sidebar from "./Sidebar"
import { makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles"
import theme from "./Theme"

const useStyles = makeStyles((theme) =>({
    root: {
      display: 'flex',
    },
    toolbar : {
      ...theme.mixins.toolbar 
    },
    content :{
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }))
function Base({role="",
  children
}){   
    const classes = useStyles();
    return (  
        <ThemeProvider theme={theme}>            
            <div className={classes.root}>      
              <Sidebar role={role}/>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                  {children}
                </div>                
              </main>      
            </div>            
        </ThemeProvider>
    )}

export default Base;
