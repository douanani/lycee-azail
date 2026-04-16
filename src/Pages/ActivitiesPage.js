// pages/ActivitiesPage.js
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { ACTIVITIES } from "../Data/constants";
import { BI } from "../Utils/icons";

export default function ActivitiesPage() {
  //const [filter, setFilter] = useState("الكل");
 // const categories = ["الكل", ...new Set(ACTIVITIES.map((a) => a.category))];

 // const filtered =
   // filter === "الكل"
   // /  ? ACTIVITIES
     // : ACTIVITIES.filter((a) => a.category === filter);

  return (
    <>
      <PageHeader
        icon="bi-calendar-event-fill"
        title="النشاطات والفعاليات"
        sub="آخر الأخبار والأنشطة المدرسية للعام الدراسي 2025/2026"
      />

      <div className="container py-5">
        {/* Development Notice */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div 
              className="text-center py-5 px-4 bg-light rounded-4 shadow-sm"
              data-aos="fade-up"
            >
              <BI 
                icon="bi-braces" 
                className="display-1 text-warning mb-4" 
                style={{ fontSize: "4rem" }}
                marginEnd="me-0" 
              />
              <h2 className="h3 fw-bold mb-3">⚠️ الصفحة قيد التطوير</h2>
              <p className="text-secondary mb-0">
                نحن نعمل على تحسين هذه الصفحة، سيتم إضافة المحتوى قريباً إن شاء الله
              </p>
            </div>
          </div>
        </div>
        {/* Filter
          <div
          className="d-flex align-items-center justify-content-center gap-2 flex-wrap mb-5"
          data-aos="fade-up"
        >
          <BI
            icon="bi-funnel-fill"
            className="fs-4 text-primary"
            marginEnd="me-0"
          />
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? "btn-primary" : "btn-outline-secondary"} rounded-pill px-4`}
              data-aos="fade-right"
              data-aos-delay={index * 50}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((act, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={act.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 border-0 shadow-sm hover-shadow-lg">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <BI
                      icon={act.icon}
                      className="fs-1"
                      style={{ color: act.color, fontSize: "2.5rem" }}
                      marginEnd="me-0"
                    />
                    <span
                      className="badge px-3 py-2 rounded-pill"
                      style={{ background: act.color + "22", color: act.color }}
                    >
                      {act.category}
                    </span>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{act.title}</h3>
                  <p className="text-secondary small mb-4 lh-base">
                    {act.desc}
                  </p>
                  <div className="d-flex align-items-center text-secondary small gap-2">
                    <BI icon="bi-calendar-event-fill" marginEnd="me-0" />
                    <span>{act.date}</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                  <div
                    style={{
                      height: "4px",
                      background: act.color,
                      borderRadius: "2px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
         */}
      
      </div>
    </>
  );
}