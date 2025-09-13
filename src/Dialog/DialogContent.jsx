import React, { useEffect, useRef } from "react";
import "./style.css";
import { createPortal } from "react-dom";

function DialogContent({ children, onClose }) {
  const contentRef = useRef();
  const backdropRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleEscape(e) {
    if (e.key === "Escape") handleClose();
  }

  function handleClose() {
    contentRef.current.classList.add("hide-dialog");
    backdropRef.current.classList.add("hide-dialog");
    contentRef.current.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  }
  function handleAnimationEnd() {
    onClose();
  }

  return createPortal(
    <div className="dialog">
      <div
        ref={backdropRef}
        className="dialog-backdrop"
        onClick={handleClose}
      ></div>
      <div ref={contentRef} className="dialog-content">
        {!!onClose && (
          <button className="dialog-close" onClick={handleClose}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>,
    document.getElementsByTagName("body")[0]
  );
}

export default DialogContent;
