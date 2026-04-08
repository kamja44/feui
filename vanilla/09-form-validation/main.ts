// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 validationRules를 이용하여 회원가입 폼 유효성 검사를 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 각 필드는 포커스를 잃었을 때(blur) 검증이 시작된다
//   2. 검증 시작 후에는 입력 시마다 실시간으로 에러가 업데이트된다
//   3. Submit 클릭 시 모든 필드를 검증하고 에러 없으면 성공 처리한다
//   4. 에러: 빨간 border + 에러 메시지, 성공: 초록 border
//
// 검증 규칙:
const validationRules = {
  email:    (v: string) => !v ? '이메일을 입력하세요' : !/\S+@\S+\.\S+/.test(v) ? '올바른 이메일 형식이 아닙니다' : '',
  password: (v: string) => v.length < 8 ? '8자 이상이어야 합니다' : !/[A-Z]/.test(v) ? '대문자를 포함해야 합니다' : '',
  confirm:  (v: string, pw: string) => v !== pw ? '비밀번호가 일치하지 않습니다' : '',
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 상태 관리 ───────────────────────────────────
//   const touched = new Set<string>()     // blur 처리된 필드
//   const errors: Record<string, string> = {}
//
// ─── 에러 표시/제거 함수 ─────────────────────────
//   const showError = (fieldId: string, msg: string) => {
//     const input  = document.getElementById(fieldId) as HTMLInputElement
//     const errEl  = document.getElementById(fieldId + '-error')!
//     errEl.textContent = msg
//     input.classList.toggle('invalid', !!msg)
//     input.classList.toggle('valid',   !msg && input.value !== '')
//     errors[fieldId] = msg
//   }
//
// ─── 이벤트 등록 패턴 ────────────────────────────
//   const emailInput = document.getElementById('email') as HTMLInputElement
//   emailInput.addEventListener('blur',  () => { touched.add('email'); showError('email', validationRules.email(emailInput.value)) })
//   emailInput.addEventListener('input', () => { if (touched.has('email')) showError('email', validationRules.email(emailInput.value)) })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
