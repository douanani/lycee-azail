// pages/TimetablePage.js
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { TIMETABLE_DATA, HOURS, DAYS, SUBJECT_COLORS, SUBJECT_ICONS } from "../Data/constants";
import { BI } from "../Utils/icons";

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

  return (
    <>
      <PageHeader
        icon="bi-clock-fill"
        title="استعمال الزمن"
        sub="جداول دراسية لجميع الأقسام — السنة الدراسية 2024/2025"
      />

      <div className="container py-5">
        {/* Class selector */}
        <div
          className="d-flex gap-2 flex-wrap justify-content-center mb-4"
          data-aos="fade-up"
        >
          {classes.map((cls, index) => (
            <button
              key={cls}
              onClick={() => setSelected(cls)}
              className={`btn d-flex align-items-center gap-2 ${selected === cls ? "btn-primary" : "btn-outline-secondary"}`}
              data-aos="fade-right"
              data-aos-delay={index * 50}
            >
              <BI icon="bi-google" marginEnd="me-0" />
              <span>{cls}</span>
            </button>
          ))}
        </div>

        {/* Info Cards for Morning and Afternoon Sessions */}
        <div className="row g-3 mb-4" data-aos="fade-up">
          <div className="col-md-6">
            <div className="card border-0 bg-primary bg-opacity-10">
              <div className="card-body text-center">
                <BI icon="bi-sun-fill" className="text-warning fs-3 mb-2" />
                <h6 className="fw-bold mb-1">الفترة الصباحية</h6>
                <p className="small text-secondary mb-0">
                  8:00 - 12:00 (4 حصص)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 bg-info bg-opacity-10">
              <div className="card-body text-center">
                <BI icon="bi-moon-stars-fill" className="text-info fs-3 mb-2" />
                <h6 className="fw-bold mb-1">الفترة المسائية</h6>
                <p className="small text-secondary mb-0">
                  13:00 - 17:00 (4 حصص)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-lg" data-aos="zoom-in">
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <BI
                icon="bi-building"
                className="text-primary"
                marginEnd="me-0"
              />
              <span>القسم: {selected}</span>
            </h4>

            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="p-3" style={{ minWidth: "120px" }}>
                      اليوم \ الساعة
                    </th>
                    {HOURS.map((h, idx) => (
                      <th
                        key={h}
                        className="p-3"
                        style={{
                          backgroundColor: idx < 4 ? "#1e3a5f" : "#0f172a",
                          minWidth: "100px",
                        }}
                      >
                        <BI icon="bi-clock" className="me-1 small" />
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DAYS.map((day) => (
                    <tr key={day}>
                      <td className="bg-light fw-bold p-3">{day}</td>
                      {(grid[day] || []).map((subj, i) => {
                        const iconClass = getSubjectIcon(subj);
                        const badgeClass = getBadgeClass(subj);
                        return (
                          <td key={i} className="p-2">
                            {subj !== "—" ? (
                              <span
                                className={`badge bg-${badgeClass} py-2 px-3 fs-6 d-inline-flex align-items-center gap-1`}
                              >
                                <BI icon={iconClass} marginEnd="me-0" />
                                <span>{subj}</span>
                              </span>
                            ) : (
                              <span className="text-secondary">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div
              className="d-flex gap-4 flex-wrap justify-content-center mt-4 p-3 bg-light rounded-3"
              data-aos="fade-up"
            >
              <div className="fw-bold me-3">المواد:</div>
              {Object.entries(SUBJECT_COLORS).map(([subj, color]) => {
                const iconClass = getSubjectIcon(subj);
                return (
                  <div key={subj} className="d-flex align-items-center gap-2">
                    <span
                      className={`badge bg-${color} py-2 px-3 d-inline-flex align-items-center gap-1`}
                    >
                      <BI icon={iconClass} marginEnd="me-0" />
                      <span>{subj}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Schedule Info */}
            <div
              className="mt-4 p-3 bg-primary bg-opacity-10 rounded-3 text-center"
              data-aos="fade-up"
            >
              <BI icon="bi-info-circle-fill" className="text-primary me-2" />
              <span className="small">
                ملاحظة: مدة كل حصة دراسية ساعة واحدة، ويوجد استراحة بين الفترتين
                الصباحية والمسائية من 12:00 إلى 13:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}