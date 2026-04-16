// pages/LessonsPage.js
import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { LESSONS } from "../Data/constants";
import { BI } from "../Utils/icons";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LessonsPage() {
  const [selectedLevel, setSelectedLevel] = useState(Object.keys(LESSONS)[0]);
  const [selectedSubject, setSelectedSubject] = useState(
    Object.keys(LESSONS[Object.keys(LESSONS)[0]])[0],
  );
  const [search, setSearch] = useState("");

  const handleLevel = (lvl) => {
    setSelectedLevel(lvl);
    setSelectedSubject(Object.keys(LESSONS[lvl])[0]);
  };

  const subjects = LESSONS[selectedLevel] || {};
  const files = (subjects[selectedSubject] || []).filter(
    (f) => f.name.toLowerCase().includes(search.toLowerCase()) || search === "",
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        icon="bi-journal-bookmark-fill"
        title="مكتبة الدروس"
        sub="جميع الدروس مرتبة حسب المستوى والمادة — قابلة للتحميل"
      />

      <div className="container py-5">
        {/* Search */}
        <motion.div
          className="row mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="col-md-6 mx-auto">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white border-end-0">
                <BI
                  icon="bi-search"
                  className="text-secondary"
                  marginEnd="me-0"
                />
              </span>
              <input
                type="text"
                className="form-control border-start-0 py-3"
                placeholder="ابحث عن درس..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Level Tabs */}
        <motion.div
          className="d-flex gap-2 flex-wrap justify-content-center mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {Object.keys(LESSONS).map((lvl, index) => (
            <motion.button
              key={lvl}
              onClick={() => handleLevel(lvl)}
              className={`btn d-flex align-items-center gap-2 ${selectedLevel === lvl ? "btn-primary" : "btn-outline-secondary"}`}
              variants={fadeRight}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BI icon="bi-mortarboard-fill" marginEnd="me-0" />
              <span>{lvl}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="row g-4">
          {/* Subject sidebar */}
          <motion.div
            className="col-md-3"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 pt-4">
                <h6 className="fw-bold text-secondary mb-0 d-flex align-items-center gap-2">
                  <BI icon="bi-journal-bookmark-fill" marginEnd="me-0" />
                  <span>المواد</span>
                </h6>
              </div>
              <div className="list-group list-group-flush">
                {Object.keys(subjects).map((subj, index) => (
                  <motion.button
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`list-group-item list-group-item-action border-0 py-3 text-end ${selectedSubject === subj ? "active bg-primary text-white" : ""}`}
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {subj}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Files list */}
          <motion.div
            className="col-md-9"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
              <motion.h3
                className="h5 fw-bold mb-0 d-flex align-items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BI
                  icon="bi-google"
                  className="text-primary"
                  marginEnd="me-0"
                />
                <span>
                  {selectedSubject} — {selectedLevel}
                </span>
              </motion.h3>
              <motion.span
                className="badge bg-secondary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {files.length} درس
              </motion.span>
            </div>

            {files.length === 0 ? (
              <motion.div
                className="text-center py-5 bg-light rounded-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BI
                  icon="bi-search"
                  className="display-1 text-secondary mb-3"
                  style={{ opacity: 0.5, fontSize: "4rem" }}
                  marginEnd="me-0"
                />
                <p className="text-secondary">لا توجد نتائج للبحث</p>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {files.map((file, i) => (
                  <motion.div
                    className="card border-0 shadow-sm mb-3 hover-shadow-lg"
                    key={i}
                    variants={staggerItem}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <motion.div
                          className="bg-danger bg-opacity-10 p-3 rounded-3"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <BI
                            icon="bi-file-pdf-fill"
                            className="text-danger fs-2"
                            marginEnd="me-0"
                          />
                        </motion.div>
                        <div>
                          <h6 className="fw-bold mb-1">{file.name}</h6>
                          <small className="text-secondary d-flex align-items-center gap-1">
                            <BI icon="bi-file-earmark-text" marginEnd="me-0" />
                            <span>PDF • {file.size}</span>
                          </small>
                        </div>
                      </div>
                      <motion.a
                        href={file.file}
                        className="btn btn-primary rounded-pill px-4 d-inline-flex align-items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>تحميل</span>
                        <BI icon="bi-download" marginEnd="me-0" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}