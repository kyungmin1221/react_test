import { FiBook, FiTarget, FiHeart } from 'react-icons/fi';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h1 className="section-title">
          About Me<span className="dot">.</span>
        </h1>
        <p className="section-subtitle">저에 대해 소개합니다</p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              안녕하세요, 백엔드 개발자 <strong>박경민</strong>입니다.
            </p>
            <p>
              Java와 Spring Boot를 기반으로 RESTful API 설계 및 서버 아키텍처 구축에
              관심을 가지고 있습니다. 데이터베이스 설계부터 배포까지 전반적인 백엔드
              개발 경험을 쌓아왔으며, 안정적이고 확장 가능한 시스템을 만드는 것을
              목표로 합니다.
            </p>
            <p>
              팀 프로젝트에서의 협업 경험을 바탕으로, 효율적인 커뮤니케이션과
              코드 리뷰를 통한 코드 품질 향상을 중요시합니다.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <FiBook className="about-card-icon" size={28} />
              <h3>지속적 학습</h3>
              <p>새로운 기술을 배우고 적용하는 것을 즐기며, 기술 블로그를 통해 학습한 내용을 정리합니다.</p>
            </div>
            <div className="about-card">
              <FiTarget className="about-card-icon" size={28} />
              <h3>문제 해결</h3>
              <p>복잡한 비즈니스 로직을 분석하고, 효율적인 해결 방안을 설계하는 과정을 좋아합니다.</p>
            </div>
            <div className="about-card">
              <FiHeart className="about-card-icon" size={28} />
              <h3>클린 코드</h3>
              <p>읽기 쉽고 유지보수가 용이한 코드를 작성하기 위해 항상 노력합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
