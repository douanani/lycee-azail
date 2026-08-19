// admin/AdminModal.js
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminModal({ show, onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header-bar">
            <h5 className="modal-title-text">{title}</h5>
            <button className="modal-close-btn" onClick={onClose}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="modal-body-content">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
