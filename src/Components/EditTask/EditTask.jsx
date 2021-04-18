import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Actions";
function EditTask({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editTask, setEditTask] = useState("");

  const handleChange = (input) => {
    setEditTask(input);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(editTask({ editTask: editTask, id }));
    setEditTask("");
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Edit your task here..."
            onChange={(e) => handleChange(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
