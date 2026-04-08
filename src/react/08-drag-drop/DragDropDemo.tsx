// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 tasks 배열을 이용하여 드래그 앤 드롭 칸반 보드를 구현하시오.
//
// 요구사항:
//   1. 할 일 목록을 드래그하여 순서를 변경할 수 있다
//   2. 드래그 중인 항목은 반투명(opacity: 0.4)으로 표시된다
//   3. 드롭 가능한 위치에 파란색 구분선이 표시된다
//   4. 드래그 완료 후 변경된 순서가 배열에 반영된다
//   5. Pointer Events 방식으로 구현한다 (HTML5 DnD 말고도 도전!)
//
// 주어진 데이터:
interface Task { id: number; title: string; priority: 'high' | 'medium' | 'low'; done: boolean; }
const initialTasks: Task[] = [
  { id: 1, title: 'Checkbox 컴포넌트 구현',      priority: 'high',   done: true  },
  { id: 2, title: 'Accordion 높이 애니메이션',    priority: 'high',   done: false },
  { id: 3, title: 'Modal 포커스 트랩 적용',       priority: 'medium', done: false },
  { id: 4, title: 'Tab 인디케이터 애니메이션',    priority: 'medium', done: false },
  { id: 5, title: 'Toast 커스텀 훅 분리',         priority: 'low',    done: false },
  { id: 6, title: 'Carousel 터치 이벤트 처리',    priority: 'low',    done: false },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 방법 A: HTML5 DnD API (간단)
//   - draggable="true"
//   - onDragStart: dragSrcIndex 저장
//   - onDragOver: e.preventDefault()
//   - onDrop: 배열 재정렬
//
// ✅ 방법 B: Pointer Events (터치 지원, 권장)
//   - onPointerDown: 시작 위치 저장, setPointerCapture
//   - onPointerMove: 클론 요소 이동
//   - onPointerUp: 드롭 위치 계산 → 재정렬
//
// ─── 배열 재정렬 유틸 ────────────────────────────
//   const reorder = <T,>(list: T[], from: number, to: number): T[] => {
//     const next = [...list]
//     const [item] = next.splice(from, 1)
//     next.splice(to, 0, item)
//     return next
//   }

export default function DragDropDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
