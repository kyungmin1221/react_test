import { FiServer, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    icon: <FiServer size={24} />,
    title: 'Backend',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring MVC', level: 80 },
      { name: 'Spring Security', level: 70 },
      { name: 'JPA / Hibernate', level: 80 },
      { name: 'Gradle / Maven', level: 75 },
    ],
  },
  {
    icon: <FiDatabase size={24} />,
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Redis', level: 65 },
      { name: 'MongoDB', level: 55 },
    ],
  },
  {
    icon: <FiCloud size={24} />,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 70 },
      { name: 'AWS (EC2, S3, RDS)', level: 65 },
      { name: 'GitHub Actions', level: 60 },
      { name: 'Linux', level: 65 },
    ],
  },
  {
    icon: <FiTool size={24} />,
    title: 'Tools & Etc',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Notion / Slack', level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section className="skills">
      <div className="skills-inner">
        <h1 className="section-title">
          Skills<span className="dot">.</span>
        </h1>
        <p className="section-subtitle">기술 스택을 소개합니다</p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <div className="skill-category-header">
                <span className="skill-category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
