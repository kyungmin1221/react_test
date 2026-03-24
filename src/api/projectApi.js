/**
 * 프로젝트 CRUD API
 *
 * [현재] localStorage 기반 로컬 저장소로 동작합니다.
 *
 * [백엔드 연동 시 교체할 부분]
 * 각 함수 내부를 fetch('/api/projects', ...) 호출로 교체하세요.
 * Projects.jsx, AdminDashboard.jsx 는 수정하지 않아도 됩니다.
 */

import { getAuthHeader } from './authApi';

const STORAGE_KEY = 'portfolio_projects';

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Spring Boot 기반의 온라인 쇼핑몰 백엔드 API. 상품 관리, 주문 처리, 결제 연동, 회원 관리 기능을 구현했습니다.',
    techStack: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/kyungmin1221',
    demoUrl: '',
    period: '2025.06 - 2025.08',
  },
  {
    id: 2,
    title: 'Community Board API',
    description:
      '게시글 CRUD, 댓글, 좋아요, 검색 기능을 갖춘 커뮤니티 게시판 RESTful API 서버. Spring Security와 JWT를 활용한 인증/인가를 구현했습니다.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    githubUrl: 'https://github.com/kyungmin1221',
    demoUrl: '',
    period: '2025.03 - 2025.05',
  },
  {
    id: 3,
    title: 'Chat Application',
    description:
      'WebSocket과 STOMP 프로토콜을 활용한 실시간 채팅 애플리케이션. 1:1 채팅 및 그룹 채팅방 기능을 제공합니다.',
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'MongoDB'],
    githubUrl: 'https://github.com/kyungmin1221',
    demoUrl: '',
    period: '2025.01 - 2025.02',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      '현재 보고 계신 포트폴리오 웹사이트입니다. React 프론트엔드와 Spring Boot 백엔드로 구성될 예정입니다.',
    techStack: ['React', 'Vite', 'React Router', 'CSS'],
    githubUrl: 'https://github.com/kyungmin1221',
    demoUrl: '',
    period: '2026.03 - 진행중',
  },
];

function getStoredProjects() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

/** 프로젝트 전체 조회 */
export async function fetchProjects() {
  // 백엔드 연동 시: return fetch('/api/projects').then(r => r.json());
  return getStoredProjects();
}

/** 프로젝트 추가 */
export async function createProject(project) {
  // 백엔드 연동 시:
  // return fetch('/api/projects', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
  //   body: JSON.stringify(project),
  // }).then(r => r.json());
  const projects = getStoredProjects();
  const newProject = {
    ...project,
    id: Date.now(),
  };
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
}

/** 프로젝트 수정 */
export async function updateProject(id, updated) {
  // 백엔드 연동 시:
  // return fetch(`/api/projects/${id}`, {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
  //   body: JSON.stringify(updated),
  // }).then(r => r.json());
  const projects = getStoredProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) throw new Error('프로젝트를 찾을 수 없습니다.');
  projects[index] = { ...projects[index], ...updated };
  saveProjects(projects);
  return projects[index];
}

/** 프로젝트 삭제 */
export async function deleteProject(id) {
  // 백엔드 연동 시:
  // return fetch(`/api/projects/${id}`, {
  //   method: 'DELETE',
  //   headers: getAuthHeader(),
  // });
  const projects = getStoredProjects().filter((p) => p.id !== id);
  saveProjects(projects);
}
