import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="home-greeting">안녕하세요, 저는</p>
        <h1 className="home-name">
          박경민<span className="dot">.</span>
        </h1>
        <h2 className="home-role">Backend Developer</h2>
        <p className="home-desc">
          Java & Spring Boot 기반의 백엔드 개발자입니다.
          <br />
          안정적이고 확장 가능한 서버 아키텍처를 설계하며,
          <br />
          지속적인 학습과 성장을 추구합니다.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn btn-primary">
            프로젝트 보기 <FiArrowRight />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            연락하기
          </Link>
        </div>

        <div className="home-social">
          <a
            href="https://github.com/kyungmin1221"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
        </div>
      </div>

      <div className="home-visual">
        <div className="code-block">
          <div className="code-header">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
          </div>
          <pre className="code-body">
{`@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        return ResponseEntity.ok(
            Profile.builder()
                .name("박경민")
                .role("Backend Developer")
                .build()
        );
    }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Home;
