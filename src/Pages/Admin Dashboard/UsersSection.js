// admin/sections/UsersSection.js
import { motion } from "framer-motion";
import { Skeleton, roleConfig } from "./adminUtils";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } };
const fadeUp   = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function UsersSection({
  users,
  userFilter,
  setUserFilter,
  loading,
  setModal,
  handleToggleUser,
  handleDeleteUser,
}) {
  return (
    <motion.div
      key="users"
      className="section-content"
      variants={stagger}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <motion.div variants={fadeUp} className="section-toolbar">
        <div className="filter-chips">
          {["all", "teacher", "counselor", "admin_staff", "supervisor"].map(r => (
            <button
              key={r}
              className={`filter-chip ${userFilter === r ? "active" : ""}`}
              onClick={() => setUserFilter(r)}
            >
              {r === "all" ? "الكل" : roleConfig[r]?.label}
            </button>
          ))}
        </div>
        <button
          className="primary-action-btn"
          onClick={() => setModal({ type: "addUser" })}
        >
          <i className="bi bi-person-plus-fill me-2"></i>إضافة مستخدم
        </button>
      </motion.div>

      {loading.users ? (
        <div className="users-grid">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="user-card p-4"><Skeleton h={160} /></div>
          ))}
        </div>
      ) : (
        <div className="users-grid">
          {users.map((u) => {
            const rc = roleConfig[u.role?.name || u.role] || roleConfig.teacher;
            return (
              <motion.div
                key={u.id}
                className="user-card"
                variants={scaleIn}
                whileHover={{ y: -5 }}
              >
                <div className="user-card-header" style={{ background: `${rc.color}12` }}>
                  <div className="user-avatar" style={{ background: rc.color }}>
                    <i className={`bi ${rc.icon}`}></i>
                  </div>
                  <div className={`user-status-dot ${u.is_active ? "active" : "inactive"}`}></div>
                </div>
                <div className="user-card-body">
                  <h6 className="user-name">{u.name}</h6>
                  <span className="user-role-chip" style={{ background: rc.bg, color: rc.color }}>
                    {rc.label}
                  </span>
                  <p className="user-email"><i className="bi bi-envelope me-1"></i>{u.email}</p>
                  {u.last_login_at && (
                    <p className="user-last-login">
                      <i className="bi bi-clock me-1"></i>آخر دخول: {u.last_login_at?.substring(0, 10)}
                    </p>
                  )}
                </div>
                <div className="user-card-footer">
                  <button
                    className={`uc-btn ${u.is_active ? "deactivate" : "activate"}`}
                    onClick={() => handleToggleUser(u)}
                  >
                    <i className={`bi ${u.is_active ? "bi-pause-circle-fill" : "bi-play-circle-fill"}`}></i>
                    {u.is_active ? "تعطيل" : "تفعيل"}
                  </button>
                  <button className="uc-btn delete" onClick={() => handleDeleteUser(u)}>
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </motion.div>
            );
          })}
          {users.length === 0 && (
            <p className="text-muted py-4">لا يوجد مستخدمون</p>
          )}
        </div>
      )}
    </motion.div>
  );
}
