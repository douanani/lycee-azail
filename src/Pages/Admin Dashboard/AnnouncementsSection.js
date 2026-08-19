// admin/sections/AnnouncementsSection.js
import { motion } from "framer-motion";
import { Skeleton, audienceLabel } from "./adminUtils";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const fadeUp   = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function AnnouncementsSection({
  announcements,
  loading,
  setModal,
  handleDeleteAnnouncement,
}) {
  return (
    <motion.div
      key="announcements"
      className="section-content"
      variants={stagger}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <motion.div variants={fadeUp} className="section-toolbar">
        <div></div>
        <button
          className="primary-action-btn"
          onClick={() => setModal({ type: "addAnnouncement" })}
        >
          <i className="bi bi-megaphone-fill me-2"></i>نشر إعلان
        </button>
      </motion.div>

      {loading.announcements ? (
        <div className="p-4"><Skeleton h={200} /></div>
      ) : (
        <div className="announcements-list">
          {announcements.map((a) => (
            <motion.div
              key={a.id}
              className={`announce-card ${a.is_published ? "published" : "draft"}`}
              variants={fadeUp}
              whileHover={{ x: 4 }}
            >
              <div className="announce-indicator"></div>
              <div className="announce-content">
                <div className="announce-top">
                  <h6>{a.title}</h6>
                  <span className={`pub-badge ${a.is_published ? "published" : "draft"}`}>
                    <i className={`bi ${a.is_published ? "bi-check-circle-fill" : "bi-clock-fill"}`}></i>
                    {a.is_published ? "منشور" : "مسودة"}
                  </span>
                </div>
                <div className="announce-meta">
                  <span><i className="bi bi-person me-1"></i>{a.author?.name || "—"}</span>
                  <span><i className="bi bi-people me-1"></i>{audienceLabel[a.audience]}</span>
                  <span><i className="bi bi-calendar me-1"></i>{a.published_at?.substring(0, 10)}</span>
                </div>
              </div>
              <div className="announce-actions">
                <button
                  className="tbl-action-btn delete"
                  onClick={() => handleDeleteAnnouncement(a.id)}
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>
            </motion.div>
          ))}
          {announcements.length === 0 && (
            <p className="text-muted text-center py-4">لا توجد إعلانات</p>
          )}
        </div>
      )}
    </motion.div>
  );
}
