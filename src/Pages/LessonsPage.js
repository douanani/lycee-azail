// pages/LessonsPage.js
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { LESSONS } from "../Data/constants";
import { BI } from "../Utils/icons";

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
    <>
      <PageHeader
        icon="bi-journal-bookmark-fill"
        title="مكتبة الدروس"
        sub="جميع الدروس مرتبة حسب المستوى والمادة — قابلة للتحميل"
      />

      <div className="container py-5">
        {/* Search */}
        <div className="row mb-4" data-aos="fade-up">
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
        </div>

        {/* Level Tabs */}
        <div
          className="d-flex gap-2 flex-wrap justify-content-center mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {Object.keys(LESSONS).map((lvl, index) => (
            <button
              key={lvl}
              onClick={() => handleLevel(lvl)}
              className={`btn d-flex align-items-center gap-2 ${selectedLevel === lvl ? "btn-primary" : "btn-outline-secondary"}`}
              data-aos="fade-right"
              data-aos-delay={index * 50}
            >
              <BI icon="bi-mortarboard-fill" marginEnd="me-0" />
              <span>{lvl}</span>
            </button>
          ))}
        </div>

        <div className="row g-4">
          {/* Subject sidebar */}
          <div className="col-md-3" data-aos="fade-left">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 pt-4">
                <h6 className="fw-bold text-secondary mb-0 d-flex align-items-center gap-2">
                  <BI icon="bi-journal-bookmark-fill" marginEnd="me-0" />
                  <span>المواد</span>
                </h6>
              </div>
              <div className="list-group list-group-flush">
                {Object.keys(subjects).map((subj, index) => (
                  <button
                    key={subj}
                    onClick={() => setSelectedSubject(subj)}
                    className={`list-group-item list-group-item-action border-0 py-3 text-end ${selectedSubject === subj ? "active bg-primary text-white" : ""}`}
                    data-aos="fade-left"
                    data-aos-delay={index * 30}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Files list */}
          <div className="col-md-9" data-aos="fade-right">
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
              <h3 className="h5 fw-bold mb-0 d-flex align-items-center gap-2">
                <BI
                  icon="bi-google"
                  className="text-primary"
                  marginEnd="me-0"
                />
                <span>
                  {selectedSubject} — {selectedLevel}
                </span>
              </h3>
              <span className="badge bg-secondary">{files.length} درس</span>
            </div>

            {files.length === 0 ? (
              <div className="text-center py-5 bg-light rounded-4">
                <BI
                  icon="bi-search"
                  className="display-1 text-secondary mb-3"
                  style={{ opacity: 0.5, fontSize: "4rem" }}
                  marginEnd="me-0"
                />
                <p className="text-secondary">لا توجد نتائج للبحث</p>
              </div>
            ) : (
              files.map((file, i) => (
                <div
                  className="card border-0 shadow-sm mb-3 hover-shadow-lg"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-danger bg-opacity-10 p-3 rounded-3">
                        <BI
                          icon="bi-file-pdf-fill"
                          className="text-danger fs-2"
                          marginEnd="me-0"
                        />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{file.name}</h6>
                        <small className="text-secondary d-flex align-items-center gap-1">
                          <BI icon="bi-file-earmark-text" marginEnd="me-0" />
                          <span>PDF • {file.size}</span>
                        </small>
                      </div>
                    </div>
                    <a
                      href={file.file}
                      className="btn btn-primary rounded-pill px-4 d-inline-flex align-items-center gap-2"
                    >
                      <span>تحميل</span>
                      <BI icon="bi-download" marginEnd="me-0" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}