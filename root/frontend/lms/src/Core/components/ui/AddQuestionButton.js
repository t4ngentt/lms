import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Divider} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    textField1 : {
        margin : "1.5rem 0",
    },
    textField2 : {
        marginBottom : "1.5rem",
    } ,
    input: {
        display: 'none',
      }, 
}))

export default function AddAssignmentButton() {
  const [open, setOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAddClick = ()=>{
    handleClose();
    handleSnackClick();
  }
  const handleSnackClick = () => {   
    setSnackOpen(true);    
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false);
    
  };

  return (
    <div>
      <Button variant="Dark" color="primary" startIcon ={<AddIcon/>}onClick={handleClickOpen}>
        Add Question
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
        <Divider/>
        <DialogContent>
          <TextField
            // autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            className={classes.textField1}
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            className={classes.textField2}
          />
        </DialogContent>
        <Divider />
        <DialogActions>
        <input accept="/*" className={classes.input} id="icon-button-file" type="file" />
        <Tooltip title="Attach files" placement="top">
            <label htmlFor="icon-button-file">
                <IconButton color="black" aria-label="Attach Files" component="span">
                <AttachFileIcon />
                </IconButton>
            </label>
      </Tooltip>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} variant="contained" color="primary">
            ADD
          </Button>
          
        </DialogActions>
      </Dialog>
      <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnackClose}>
            <Alert onClose={handleSnackClose} severity="success">
            Question Added Successfully!
            </Alert>
          </Snackbar>
    </div>
  );
}