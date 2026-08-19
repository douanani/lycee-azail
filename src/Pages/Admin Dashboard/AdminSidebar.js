// admin/AdminSidebar.js
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
  { id: "overview",      label: "نظرة عامة",        icon: "bi-grid-1x2-fill" },
  { id: "resources",     label: "الموارد التعليمية", icon: "bi-journal-bookmark-fill" },
  { id: "users",         label: "المستخدمون",        icon: "bi-people-fill" },
  { id: "announcements", label: "الإعلانات",         icon: "bi-megaphone-fill" },
  { id: "timetable",     label: "جداول الحصص",       icon: "bi-calendar-week-fill" },
  { id: "settings",      label: "إعدادات النظام",    icon: "bi-gear-fill" },
];

export default function AdminSidebar({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen, adminUser }) {
  return (
    <motion.aside
      className="admin-sidebar"
      animate={{ width: sidebarOpen ? 260 : 72 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-icon">
          <i className="bi bi-shield-fill-check"></i>
        </div>
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="brand-text"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <span className="brand-name">لوحة التحكم</span>
              <span className="brand-sub">مدير النظام</span>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className={`bi bi-chevron-${sidebarOpen ? "right" : "left"}`}></i>
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {SIDEBAR_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            className={`sidebar-nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            title={!sidebarOpen ? item.label : ""}
          >
            <i className={`bi ${item.icon} nav-icon`}></i>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span
                  className="nav-label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
            {activeSection === item.id && (
              <motion.div
                className="nav-active-bar"
                layoutId="navBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="admin-avatar">
          <i className="bi bi-person-fill"></i>
        </div>
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="admin-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className="admin-name">{adminUser?.name || "مدير النظام"}</span>
              <span className="admin-email">{adminUser?.email || "admin@lycee.dz"}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
