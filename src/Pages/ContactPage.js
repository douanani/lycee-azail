// pages/ContactPage.js
import PageHeader from "../components/PageHeader";
import { BI } from "../Utils/icons";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        icon="bi-telephone-fill"
        title="اتصل بنا"
        sub="نحن في خدمتكم — تواصلوا مع إدارة المؤسسة"
      />

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <BI icon="bi-headset" className="text-primary" marginEnd="me-0" />
              <span>معلومات التواصل</span>
            </h3>

            {[
              {
                icon: "bi-geo-alt-fill",
                label: "العنوان",
                value: "ثانوية حاج بن جعفر، بلدية العزايل، ولاية تلمسان، الجزائر",
              },
              {
                icon: "bi-printer-fill",
                label: "الفاكس",
                value: "041 XX XX XX",
              },
              {
                icon: "bi-envelope-fill",
                label: "البريد الإلكتروني",
                value: "lyceeazail@gmail.com",
              },
              {
                icon: "bi-clock-fill",
                label: "ساعات العمل",
                value: "الأحد – الخميس: 8:00 ص – 5:00 م",
              },
            ].map((item, i) => (
              <div
                className="d-flex gap-3 mb-4"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className="bg-primary bg-opacity-10 p-3 rounded-3 d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <BI
                    icon={item.icon}
                    className="text-primary fs-4"
                    marginEnd="me-0"
                  />
                </div>
                <div>
                  <small className="text-secondary text-uppercase d-block">
                    {item.label}
                  </small>
                  <div className="fw-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4 p-md-5">
                <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                  <BI
                    icon="bi-envelope-paper-fill"
                    className="text-primary"
                    marginEnd="me-0"
                  />
                  <span>أرسل رسالة</span>
                </h3>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label d-flex align-items-center gap-2">
                      <BI icon="bi-person-fill" marginEnd="me-0" />
                      <span>الاسم الكامل</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label d-flex align-items-center gap-2">
                      <BI icon="bi-envelope-fill" marginEnd="me-0" />
                      <span>البريد الإلكتروني</span>
                    </label>
                    <input
                      type="email"
                      className="form-control py-3"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label d-flex align-items-center gap-2">
                      <BI icon="bi-journal-bookmark-fill" marginEnd="me-0" />
                      <span>الموضوع</span>
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="موضوع رسالتك"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label d-flex align-items-center gap-2">
                      <BI icon="bi-chat-text-fill" marginEnd="me-0" />
                      <span>الرسالة</span>
                    </label>
                    <textarea
                      className="form-control py-3"
                      rows="5"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3 rounded-pill d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <span>إرسال الرسالة</span>
                    <BI icon="bi-arrow-left" marginEnd="me-0" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}