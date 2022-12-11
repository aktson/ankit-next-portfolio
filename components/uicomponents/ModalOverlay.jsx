import React from "react";

function ModalOverlay({ onClose }) {
	return <div className="w-full h-full z-50 hidden sm:block" id="modal-overlay" style={{ zIndex: "50" }} onClick={onClose}></div>;
}

export default ModalOverlay;
