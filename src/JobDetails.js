import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function JobDetails({title, description, date, location, pay, ft, hours, employerName, contact, rating}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="#FFFFFF" onClick={handleClickOpen} position="center" style={{marginBottom: 7}}>
        More
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style = {{background: "#535B67"}} >
        {title} • {location} 
        </DialogTitle>
        <DialogContent dividers style = {{background: "#535B67"}}>
        <Typography gutterBottom>
            <i>Posted on:</i> {date}
          </Typography>
          <Typography gutterBottom>
             <i>Details: </i> {description}
          </Typography>
          <Typography gutterBottom>
             <i>Salary: </i> {pay}
          </Typography>
          <Typography gutterBottom>
            <i>{ft}</i> | {hours}
          </Typography>
          <Typography gutterBottom>
            <i>Posted by: </i>{employerName} 
          </Typography>
          <Typography gutterBottom>
            <i>Rating: </i>{rating}
          </Typography>
          <Typography gutterBottom>
            <i>Contact: </i>{contact}
          </Typography>
        </DialogContent>
        <DialogActions style = {{background: "#535B67"}}>
          <Button variant="outlined" autoFocus onClick={handleClose} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
