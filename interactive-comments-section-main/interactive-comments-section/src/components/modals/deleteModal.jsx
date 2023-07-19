//delete modal component
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './deleteModal.css';

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} size='sm' centered='true' >
        <Modal.Header bsPrefix='modalHeader'>
          <Modal.Title>Delete comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this comment? this will remove the comment and cannot be undone</Modal.Body>
        <Modal.Footer bsPrefix='modalFooter'>
          <Button variant="secondary" onClick={handleClose}>
            NO, CANCEL
          </Button>
          <Button variant="danger" onClick={handleClose}>
            YES, DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default DeleteModal;
