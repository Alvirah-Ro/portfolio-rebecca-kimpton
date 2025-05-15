import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ImageModal({ src, alt, className}) {
    const [show, setShow] = useState(false);

    const defaultClass = "img-fluid max-width-400 mb-4 p-0";

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className || defaultClass}
                style={{ 
                    cursor: 'pointer', 
                    maxWidth: '34.2vw', 
                    height: 'auto',
                }}
                onClick={() => setShow(true)}
            />

            <Modal show={show} onHide={() => setShow(false)} centered size="lg">
                <Modal.Body className="p-0">
                    <img src={src} alt={alt} className="img-fluid w-100" 
                        style={{
                            maxHeight: "80vh",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}