// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 reservationConfig를 이용하여 날짜 선택기를 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 입력 필드 클릭 시 달력 드롭다운이 나타난다
//   2. 이전/다음 월 버튼으로 달력을 이동할 수 있다
//   3. 날짜 클릭 시 "YYYY년 MM월 DD일" 형식으로 입력 필드에 표시된다
//   4. 오늘 날짜는 파란색 강조, 선택된 날짜는 배경색으로 표시된다
//   5. 예약 불가 날짜(disabledDates)와 오늘 이전 날짜는 선택 불가 처리
//   6. 달력 외부 클릭 시 닫힌다
//
// 주어진 데이터:
const today = new Date();
const reservationConfig = {
  minDate:       today,
  maxDate:       new Date(today.getFullYear(), today.getMonth() + 3, today.getDate()),
  disabledDates: [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
  ],
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 상태 변수 ───────────────────────────────────
//   let viewDate = new Date();   // 현재 표시 중인 월
//   let selected: Date | null = null;
//
// ─── 날짜 배열 생성 ──────────────────────────────
//   const buildDays = (year: number, month: number) => {
//     const firstDay  = new Date(year, month, 1).getDay()      // 시작 요일
//     const lastDate  = new Date(year, month + 1, 0).getDate() // 마지막 날
//     return [
//       ...Array(firstDay).fill(null),                          // 앞 빈 칸
//       ...Array.from({ length: lastDate }, (_, i) => new Date(year, month, i + 1))
//     ]
//   }
//
// ─── 유틸 함수 ───────────────────────────────────
//   const isSameDay  = (a: Date, b: Date) => a.toDateString() === b.toDateString()
//   const isDisabled = (d: Date) =>
//     d < reservationConfig.minDate ||
//     reservationConfig.disabledDates.some(x => isSameDay(x, d))

// TODO: 위 문제와 힌트를 참고하여 구현하세요
