// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 signupSteps를 이용하여 다단계 회원가입 스텝퍼를 구현하시오.
//
// 요구사항:
//   1. 상단에 진행 상태바와 스텝 인디케이터(원형)를 표시한다
//   2. "다음" 클릭 시 현재 스텝의 유효성을 검사하고, 통과해야 다음으로 이동 가능하다
//   3. "이전" 클릭은 항상 가능하며, 입력 데이터는 유지된다
//   4. 완료된 스텝의 인디케이터는 체크(✓) 아이콘과 함께 초록색으로 표시된다
//   5. 마지막 스텝에서 "완료" 클릭 시 수집된 전체 데이터를 콘솔에 출력한다
//   6. 스텝 전환 시 슬라이드 애니메이션이 적용된다
//
// 주어진 데이터:
interface StepData {
  name: string; email: string; password: string;
  phone: string; birthYear: string; agree: boolean;
}
const signupSteps = [
  {
    id:    'account',
    title: '계정 정보',
    icon:  '👤',
    fields: ['name', 'email', 'password'] as const,
    validate: (data: Partial<StepData>) => {
      const errors: Partial<Record<keyof StepData, string>> = {};
      if (!data.name     || data.name.length < 2)          errors.name     = '이름은 2자 이상이어야 합니다';
      if (!data.email    || !/\S+@\S+\.\S+/.test(data.email)) errors.email = '올바른 이메일을 입력하세요';
      if (!data.password || data.password.length < 8)      errors.password = '비밀번호는 8자 이상이어야 합니다';
      return errors;
    },
  },
  {
    id:    'personal',
    title: '개인 정보',
    icon:  '📋',
    fields: ['phone', 'birthYear'] as const,
    validate: (data: Partial<StepData>) => {
      const errors: Partial<Record<keyof StepData, string>> = {};
      if (!data.phone     || !/^010-\d{4}-\d{4}$/.test(data.phone)) errors.phone     = '010-0000-0000 형식으로 입력하세요';
      if (!data.birthYear || +data.birthYear < 1900 || +data.birthYear > 2010) errors.birthYear = '올바른 출생연도를 입력하세요';
      return errors;
    },
  },
  {
    id:    'agree',
    title: '약관 동의',
    icon:  '✅',
    fields: ['agree'] as const,
    validate: (data: Partial<StepData>) => {
      const errors: Partial<Record<keyof StepData, string>> = {};
      if (!data.agree) errors.agree = '이용약관에 동의해야 합니다';
      return errors;
    },
  },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 상태 구조
//   - useState<number>          → 현재 스텝 인덱스
//   - useState<Partial<StepData>> → 수집된 폼 데이터
//   - useState<'forward'|'back'>  → 전환 방향 (애니메이션용)
//
// ─── 진행 바 ─────────────────────────────────────
//   - width: `${(currentStep / (total - 1)) * 100}%`
//   - transition: width 0.4s ease
//
// ─── 스텝 인디케이터 ────────────────────────────
//   - i < current: 완료(초록 + ✓)
//   - i === current: 활성(파란색)
//   - i > current: 비활성(회색)
//
// ─── 슬라이드 애니메이션 ────────────────────────
//   - forward: translateX(100%) → translateX(0)
//   - back:    translateX(-100%) → translateX(0)

export default function StepperDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
