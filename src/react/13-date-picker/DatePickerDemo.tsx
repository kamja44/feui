// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 reservationConfig를 이용하여 날짜 선택기(Date Picker)를 구현하시오.
//
// 요구사항:
//   1. 입력 필드 클릭 시 달력이 드롭다운으로 나타난다
//   2. 이전/다음 월 버튼으로 달력을 이동할 수 있다
//   3. 날짜 클릭 시 선택되고 입력 필드에 "YYYY년 MM월 DD일" 형식으로 표시된다
//   4. 오늘 날짜는 파란색으로 강조된다
//   5. 예약 불가 날짜(disabledDates)와 오늘 이전 날짜는 선택 불가(흐리게 표시)
//   6. 달력 외부 클릭 시 닫힌다
//
// 주어진 데이터:
const today = new Date();
const reservationConfig = {
  minDate: today,
  maxDate: new Date(today.getFullYear(), today.getMonth() + 3, today.getDate()), // 3개월 후
  disabledDates: [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
  ],
  locale: 'ko-KR',
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<Date>        → 현재 표시 월 (viewDate)
//   - useState<Date | null> → 선택된 날짜
//   - useState<boolean>     → 달력 오픈 여부
//   - useMemo               → 현재 월의 날짜 배열 계산
//
// ─── 달력 날짜 배열 ──────────────────────────────
//   const getDays = (year: number, month: number) => {
//     const firstDay = new Date(year, month, 1).getDay()    // 시작 요일 (0~6)
//     const lastDate = new Date(year, month + 1, 0).getDate() // 마지막 날
//     return [...Array(firstDay).fill(null),
//             ...Array.from({ length: lastDate }, (_, i) => new Date(year, month, i + 1))]
//   }
//
// ─── 날짜 비교 유틸 ──────────────────────────────
//   const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString()
//   const isDisabled = (d: Date) => d < reservationConfig.minDate || reservationConfig.disabledDates.some(x => isSameDay(x, d))

export default function DatePickerDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
