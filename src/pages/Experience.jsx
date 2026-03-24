import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    title: '백엔드 개발',
    organization: '프로젝트 경험',
    period: '2024 - 현재',
    description: [
      'Spring Boot 기반 RESTful API 설계 및 구현',
      'JPA를 활용한 데이터 모델링 및 쿼리 최적화',
      'Docker를 활용한 개발 환경 구축 및 배포 자동화',
      'Git Flow 기반의 브랜치 전략 수립 및 코드 리뷰 진행',
    ],
  },
  {
    type: 'education',
    title: '컴퓨터공학 전공',
    organization: '대학교',
    period: '2020 - 2024',
    description: [
      '자료구조, 알고리즘, 운영체제, 네트워크 등 CS 기초 학습',
      '졸업 프로젝트: 팀 프로젝트 관리 플랫폼 개발',
      '알고리즘 스터디 참여 및 문제 풀이',
    ],
  },
];

const certifications = [
  { name: '정보처리기사', date: '2024' },
  { name: 'SQLD', date: '2024' },
];

function Experience() {
  return (
    <section className="experience">
      <div className="experience-inner">
        <h1 className="section-title">
          Experience<span className="dot">.</span>
        </h1>
        <p className="section-subtitle">경험과 이력을 소개합니다</p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.title} className="timeline-item">
              <div className="timeline-icon">
                {exp.type === 'work' ? (
                  <FiBriefcase size={20} />
                ) : (
                  <FiBookOpen size={20} />
                )}
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-org">{exp.organization}</p>
                <ul className="timeline-desc">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-section">
          <h2 className="cert-title">자격증</h2>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-item">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
