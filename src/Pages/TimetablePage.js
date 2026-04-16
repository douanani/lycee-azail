// pages/TimetablePage.js
import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { TIMETABLE_DATA, HOURS, DAYS, SUBJECT_COLORS, SUBJECT_ICONS } from "../Data/constants";

export default function TimetablePage() {
  const classes = Object.keys(TIMETABLE_DATA);
  const [selected, setSelected] = useState(classes[0]);
  const grid = TIMETABLE_DATA[selected];

  const getSubjectIcon = (subject) => {
    return SUBJECT_ICONS[subject] || "bi-book-fill";
  };

  const getBadgeClass = (subject) => {
    return SUBJECT_COLORS[subject] || "secondary";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const tableRowVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(13, 110, 253, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <PageHeader
        icon="bi-clock-fill"
        title="استعمال الزمن"
        sub="جداول دراسية لجميع الأقسام — السنة الدراسية 2024/2025"
      />

      <div className="container py-5">
        {/* Class selector */}
        <motion.div
          className="d-flex gap-2 flex-wrap justify-content-center mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          data-aos="fade-up"
        >
          {classes.map((cls, index) => (
            <motion.button
              key={cls}
              onClick={() => setSelected(cls)}
              className={`btn d-flex align-items-center gap-2 ${
                selected === cls ? "btn-primary" : "btn-outline-secondary"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-right"
              data-aos-delay={index * 50}
            >
              <i className="bi bi-people-fill"></i>
              <span>{cls}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Info Cards for Morning and Afternoon Sessions */}
        <motion.div 
          className="row g-3 mb-4" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-md-6">
            <motion.div 
              className="card border-0 bg-primary bg-opacity-10 h-100"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="card-body text-center">
                <motion.i 
                  className="bi bi-sun-fill text-warning fs-3 mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                ></motion.i>
                <h6 className="fw-bold mb-1">الفترة الصباحية</h6>
                <p className="small text-secondary mb-0">
                  8:00 - 12:00 (4 حصص)
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div 
              className="card border-0 bg-info bg-opacity-10 h-100"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="card-body text-center">
                <motion.i 
                  className="bi bi-moon-stars-fill text-info fs-3 mb-2"
                  animate={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                ></motion.i>
                <h6 className="fw-bold mb-1">الفترة المسائية</h6>
                <p className="small text-secondary mb-0">
                  13:00 - 17:00 (4 حصص)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="card border-0 shadow-lg" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        >
          <div className="card-body p-4">
            <motion.h4 
              className="fw-bold mb-4 d-flex align-items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.i 
                className="bi bi-building text-primary"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              ></motion.i>
              <span>القسم: {selected}</span>
            </motion.h4>

            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="bg-dark">
                  <tr>
                    <th className="p-3 text-white" style={{ minWidth: "120px" }}>
                      اليوم \ الساعة
                    </th>
                    {HOURS.map((h, idx) => (
                      <th
                        key={h}
                        className="p-3 text-white"
                        style={{
                          backgroundColor: idx < 4 ? "#1e3a5f" : "#0f172a",
                          minWidth: "100px",
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <i className="bi bi-clock me-1 small"></i>
                          <span className="text-white">{h}</span>
                        </motion.div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DAYS.map((day, rowIndex) => (
                    <motion.tr
                      key={day}
                      custom={rowIndex}
                      variants={tableRowVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      <td className="bg-light fw-bold p-3">{day}</td>
                      {(grid[day] || []).map((subj, i) => {
                        const iconClass = getSubjectIcon(subj);
                        const badgeClass = getBadgeClass(subj);
                        return (
                          <td key={i} className="p-2">
                            {subj !== "—" ? (
                              <motion.span
                                className={`badge bg-${badgeClass} py-2 px-3 fs-6 d-inline-flex align-items-center gap-1`}
                                variants={badgeVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                custom={i}
                              >
                                <i className={`bi ${iconClass}`}></i>
                                <span>{subj}</span>
                              </motion.span>
                            ) : (
                              <motion.span 
                                className="text-secondary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                —
                              </motion.span>
                            )}
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </motion.div>
      </div>
    </>
  );
}