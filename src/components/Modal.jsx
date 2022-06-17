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
import Links from './Links';

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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="#f44336" onClick={handleClickOpen}>
        Get Links
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Instructions to Joining Stream
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please endeavour to read the following instructions and follow them as they are given to join the stream, failure to do so, you may be removed from the stream, this is to avoid distraction to the Viewers and the Broadcaster. The following Instruction is for those that want to join the Video Livestream(<b>Google Meet</b>), but if you want to join the Audio Livestream(<b>MixLR</b>) please ignore the Instruction and click the <b>GET LINKS</b> button below to join in.
          </Typography>
          <Typography gutterBottom>
            <ol className='list-decimal pl-10'>
              <li>Before and when you get admitted to join the Stream, turn off your Camera from Viewing yourself and do not turn it on during the Stream. IMPORTANT!</li>
              <li>Also, when you get admitted to join the stream, mute your Mic from recording so as to avoid distractions and to remove background noise.</li>
            </ol>
          </Typography>
          <Typography gutterBottom className="pb-3">
            If you have read through the instructions, go ahead and click the <b>GET LINKS</b> button below to join the Stream.
          </Typography>
          <Typography gutterBottom>
            If you have any Issues or complaints during the stream, kindly use the InCall Messages on Google meet to relay your complaint or click <a className='text-blue-600 underline' href="https://forms.gle/8jwoCjqiQ37qcKmX8" _target="_blank">here</a> to do so.<br />
            God Bless you as you comply.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="#f44336">
            <Links />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}