import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Spring Boot 기반의 온라인 쇼핑몰 백엔드 API. 상품 관리, 주문 처리, 결제 연동, 회원 관리 기능을 구현했습니다.',
    techStack: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Docker'],
    github: 'https://github.com/kyungmin1221',
    period: '2025.06 - 2025.08',
  },
  {
    title: 'Community Board API',
    description:
      '게시글 CRUD, 댓글, 좋아요, 검색 기능을 갖춘 커뮤니티 게시판 RESTful API 서버. Spring Security와 JWT를 활용한 인증/인가를 구현했습니다.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/kyungmin1221',
    period: '2025.03 - 2025.05',
  },
  {
    title: 'Chat Application',
    description:
      'WebSocket과 STOMP 프로토콜을 활용한 실시간 채팅 애플리케이션. 1:1 채팅 및 그룹 채팅방 기능을 제공합니다.',
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'MongoDB'],
    github: 'https://github.com/kyungmin1221',
    period: '2025.01 - 2025.02',
  },
  {
    title: 'Portfolio Website',
    description:
      '현재 보고 계신 포트폴리오 웹사이트입니다. React 프론트엔드와 Spring Boot 백엔드로 구성될 예정입니다.',
    techStack: ['React', 'Vite', 'React Router', 'CSS'],
    github: 'https://github.com/kyungmin1221',
    period: '2026.03 - 진행중',
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-inner">
        <h1 className="section-title">
          Projects<span className="dot">.</span>
        </h1>
        <p className="section-subtitle">주요 프로젝트를 소개합니다</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card-header">
                <span className="project-period">{project.period}</span>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
