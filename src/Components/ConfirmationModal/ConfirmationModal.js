import React, { useState } from 'react';
import { Fade, makeStyles, TextField, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(60),
    },
  },
  inputFields: {
    width: '100%',
  },
  loginText: {
    textAlign: 'center'
  },
  newLine: {
    flexBasis: '100%',
    height: '2vh'
  },
  modalRightAlignText: {
    cursor: 'pointer',
    float: 'right'
  }
}));

export default function ConfirmModal(props) {

}
