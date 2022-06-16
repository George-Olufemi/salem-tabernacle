import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <h3 className='text-lg'>GET LINKS</h3>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className='text-lg' id="transition-modal-title">MixLR - Audio</h2>
            <p className='pb-5' id="transition-modal-description"><a className='text-blue-800 underline' href="https://mixlr.com/saltab" target="_blank">Audio</a></p>
            {/*  */}
            <h2 className='text-lg' id="transition-modal-title">Google Meet - Video</h2>
            <p id="transition-modal-description"><a className='text-blue-800 underline' href="https://meet.google.com/sta-cpqq-xiv" target="_blank">Video</a></p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}