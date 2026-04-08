// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 people 배열을 이용하여 체크박스 리스트를 구현하시오.
//
// 요구사항:
//   1. 각 사람의 이름과 직책을 체크박스 레이블로 표시한다
//   2. "전체 선택" 체크박스가 맨 위에 있어야 한다
//   3. 일부만 선택되면 "전체 선택"은 indeterminate 상태가 된다
//   4. 선택된 사람 수를 실시간으로 표시한다 (예: "2 / 4명 선택됨")
//   5. Toggle Switch도 추가로 구현한다 (다크모드 ON/OFF 예시)
//
// 주어진 데이터:
const people = [
  { id: 1, name: "김철수", role: "Frontend" },
  { id: 2, name: "이영희", role: "Backend" },
  { id: 3, name: "박민준", role: "Designer" },
  { id: 4, name: "최수진", role: "DevOps" },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<boolean[]>         → 각 항목 체크 상태 배열
//   - useRef<HTMLInputElement>    → indeterminate 속성 직접 설정 (prop 불가)
//
// ─── 1. 기본 Checkbox (제어 컴포넌트) ─────────────
//   - <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
//   - 제어 컴포넌트: React가 값의 단일 출처(source of truth)
//
// ─── 2. 커스텀 스타일 Checkbox ────────────────────
//   - appearance: none; 으로 브라우저 기본 스타일 제거
//   - ::after 로 체크마크(✓) 그리기, checked 상태에서 opacity/scale 전환
//
// ─── 3. Toggle Switch ────────────────────────────
//   - checkbox를 숨기고(visually-hidden), label을 트랙으로 표현
//   - thumb(원)을 translateX()로 좌우 슬라이딩
//
// ─── 4. Indeterminate (중간 상태) ────────────────
//   - useRef<HTMLInputElement>로 DOM 직접 접근
//   - useEffect(() => { ref.current.indeterminate = ... }, [deps])
//   - 전부 체크 → checked=true / 일부 체크 → indeterminate=true / 모두 해제 → checked=false

export default function CheckboxDemo() {
  return <div>{/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}</div>;
}
