// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 형식의 회원가입 폼을 유효성 검사와 함께 구현하시오.
//
// 요구사항:
//   1. 각 필드는 포커스를 잃었을 때(blur) 검증이 시작된다
//   2. 검증 시작 후에는 입력할 때마다 실시간으로 에러가 업데이트된다
//   3. 제출(Submit) 클릭 시 모든 필드를 검증하고 에러가 없으면 성공 처리한다
//   4. 에러: 빨간 border + 에러 메시지, 성공: 초록 border + 체크 아이콘
//   5. useForm() 커스텀 훅으로 로직을 분리하여 구현한다
//
// 검증 규칙:
const validationRules = {
  username: { required: true, minLength: 2,  maxLength: 20, pattern: /^[a-zA-Z0-9_]+$/, patternMsg: '영문, 숫자, _만 사용 가능합니다' },
  email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, patternMsg: '올바른 이메일 형식이 아닙니다' },
  password: { required: true, minLength: 8, custom: (v: string) => /[A-Z]/.test(v) && /[0-9]/.test(v) ? '' : '대문자와 숫자를 포함해야 합니다' },
  confirm:  { required: true, matchField: 'password' as const, matchMsg: '비밀번호가 일치하지 않습니다' },
  age:      { required: true, min: 14, max: 120, type: 'number' as const },
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ useForm 커스텀 훅 인터페이스
//   const useForm = (initialValues, validationRules) => {
//     // values, errors, touched 상태
//     // handleChange(field, value)
//     // handleBlur(field)       ← touched 처리
//     // handleSubmit(onSuccess) ← 전체 검증 후 호출
//     // isValid: Object.values(errors).every(e => !e)
//   }
//
// ─── touched 패턴 ────────────────────────────────
//   - blur 전: 에러 미표시 (사용자 경험)
//   - blur 후 or submit 시도 후: 에러 표시
//   - touched: Set<string> 또는 Record<string, boolean>

export default function FormDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
