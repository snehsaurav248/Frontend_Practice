import React, { useState } from "react";
import "./Modal.css"

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal} className="modal-container">
        Open Modal
      </button>
      {isOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>Sneh Saurav's Modal</h1>
            <p>Hello Sneh Saurav How you're doing?</p>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
