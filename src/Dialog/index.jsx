import React, { useState } from "react";
import DialogContent from "./DialogContent";

function Dialog() {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => {
    setOpen(!open);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={handleOpenDialog}>
        ShowDialog
      </button>
      {open && (
        <DialogContent onClose={handleCloseDialog}>
          <h4>Title</h4>
          <p>Dialog Content</p>
        </DialogContent>
      )}
    </div>
  );
}

export default Dialog;
