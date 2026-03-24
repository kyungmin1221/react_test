/**
 * 문의 메일 전송
 *
 * [현재] mailto: 방식 — 사용자의 메일 앱이 열립니다.
 *
 * [백엔드 연동 시 교체할 부분]
 * 아래 sendContact 함수 내부를 다음으로 교체하세요:
 *
 *   const response = await fetch('/api/contact', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(data),
 *   });
 *   if (!response.ok) throw new Error('전송 실패');
 *
 * Contact.jsx는 수정하지 않아도 됩니다.
 */

const RECIPIENT_EMAIL = 'fox9872@naver.com';

export async function sendContact({ name, email, message }) {
  const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
  const body = encodeURIComponent(
    `이름: ${name}\n이메일: ${email}\n\n${message}`
  );
  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}
