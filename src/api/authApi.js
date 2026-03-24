/**
 * 관리자 인증 API
 *
 * [현재] 로컬 모의 인증 — 비밀번호 "admin1234"로 동작합니다.
 *
 * [백엔드 연동 시 교체할 부분]
 * loginAdmin 함수 내부를 다음으로 교체하세요:
 *
 *   const response = await fetch('/api/admin/login', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ password }),
 *   });
 *   if (!response.ok) throw new Error('인증 실패');
 *   const data = await response.json();
 *   return data.token;
 */

const MOCK_PASSWORD = 'admin1234';
const MOCK_TOKEN = 'mock-admin-jwt-token';

export async function loginAdmin(password) {
  // 백엔드 연동 전까지 로컬 비밀번호 검증
  if (password !== MOCK_PASSWORD) {
    throw new Error('비밀번호가 일치하지 않습니다.');
  }
  return MOCK_TOKEN;
}

export function logoutAdmin() {
  // 백엔드 연동 시: 서버 세션 무효화 등 필요하면 추가
}

export function getAuthHeader() {
  const token = sessionStorage.getItem('admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}
