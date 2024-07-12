import React from 'react'
import "./Toastr.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  function Toastr({e}) {
     const notify = (e) => toast(e);
  return (
    <ToastContainer position="bottom-left"/>
  )
}
