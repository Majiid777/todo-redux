import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import{ taskEdit } from '../../redux/action';




const EditTask = ({task}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [etest, setEtest] = useState(task.tache);
  const dispatch= useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedTask={ id: task.id, tache: etest, isDone: task.isDone};
    dispatch(taskEdit(editedTask));
    handleClose();
  }


  return (
    <div>
        <Button variant="primary" onClick={handleShow}>Edit</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit the Task</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onubmit={handleEdit}>
        <input type="text" value={etest} onChange={(e)=>setEtest(e.target.value)} />
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" type="submit">
         Save Changes
       </Button>
    </form>
  </Modal.Body>
 
</Modal>
    </div>
  )
}

export default EditTask