import { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 백엔드 API 연동 시 여기에 fetch/axios 호출 추가
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact">
      <div className="contact-inner">
        <h1 className="section-title">
          Contact<span className="dot">.</span>
        </h1>
        <p className="section-subtitle">연락주시면 감사하겠습니다</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FiMail className="contact-icon" size={20} />
              <div>
                <h3>Email</h3>
                <p>kyungmin@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" size={20} />
              <div>
                <h3>Location</h3>
                <p>Seoul, South Korea</p>
              </div>
            </div>
            <div className="contact-item">
              <FiGithub className="contact-icon" size={20} />
              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/kyungmin1221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kyungmin1221
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="메시지를 입력하세요..."
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {submitted ? '전송 완료!' : (
                <>보내기 <FiSend size={16} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
