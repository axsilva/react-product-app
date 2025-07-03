import { Toast, ToastContainer } from "react-bootstrap";

function FeedbackToast({ isOpen, status, title, description, onClose }) {
  return (
    <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
      <Toast onClose={onClose} show={isOpen} animation={true} bg={status}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default FeedbackToast;
