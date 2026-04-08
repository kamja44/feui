// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 steps 배열을 이용하여 다단계 스텝 폼을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 상단에 진행 상태바와 스텝 인디케이터(원형)를 표시한다
//   2. "다음" 클릭 시 현재 스텝의 유효성 검사를 통과해야 다음으로 이동한다
//   3. "이전" 클릭은 항상 가능하며, 입력 데이터는 유지된다
//   4. 완료된 스텝 인디케이터는 체크(✓)와 초록색으로 표시된다
//   5. "완료" 클릭 시 수집한 전체 데이터를 콘솔에 출력한다
//
// 주어진 데이터:
const steps = [
  {
    id:    'account',
    title: '계정 정보',
    fields: [
      { id: 'name',     label: '이름',       type: 'text',     placeholder: '홍길동' },
      { id: 'email',    label: '이메일',     type: 'email',    placeholder: 'user@example.com' },
      { id: 'password', label: '비밀번호',   type: 'password', placeholder: '8자 이상' },
    ],
    validate: (data: Record<string, string>) => {
      if (!data.name     || data.name.length < 2)          return '이름은 2자 이상이어야 합니다';
      if (!data.email    || !/\S+@\S+\.\S+/.test(data.email)) return '올바른 이메일을 입력하세요';
      if (!data.password || data.password.length < 8)      return '비밀번호는 8자 이상이어야 합니다';
      return null;
    },
  },
  {
    id:    'personal',
    title: '개인 정보',
    fields: [
      { id: 'phone', label: '전화번호', type: 'tel',    placeholder: '010-0000-0000' },
      { id: 'city',  label: '거주 도시', type: 'text',  placeholder: '서울' },
    ],
    validate: (data: Record<string, string>) => {
      if (!data.phone || !/^010-\d{4}-\d{4}$/.test(data.phone)) return '010-0000-0000 형식으로 입력하세요';
      if (!data.city) return '거주 도시를 입력하세요';
      return null;
    },
  },
  {
    id:    'confirm',
    title: '최종 확인',
    fields: [],
    validate: () => null,
  },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 상태 변수 ───────────────────────────────────
//   let current = 0
//   const formData: Record<string, string> = {}
//
// ─── 렌더 함수 ───────────────────────────────────
//   const render = () => {
//     // 1. 진행 바: progressBar.style.width = `${(current / (steps.length - 1)) * 100}%`
//     // 2. 인디케이터: i < current → '✓' 초록 / i === current → 활성 파랑 / i > current → 비활성
//     // 3. 콘텐츠: steps[current].fields로 input 생성
//     //            마지막 스텝이면 formData 요약 표시
//     // 4. 버튼: first → prev 비활성 / last → next를 '완료'로 변경
//   }
//
// ─── 다음 버튼 ───────────────────────────────────
//   btnNext.addEventListener('click', () => {
//     // 현재 스텝 입력값 수집
//     steps[current].fields.forEach(f => { formData[f.id] = (document.getElementById(f.id) as HTMLInputElement).value })
//     const error = steps[current].validate(formData)
//     if (error) { alert(error); return }
//     if (current < steps.length - 1) { current++; render() }
//     else { console.log('완료! 수집 데이터:', formData) }
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
