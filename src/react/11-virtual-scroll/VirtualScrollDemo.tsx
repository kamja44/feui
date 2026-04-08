// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// generateItems 함수로 생성된 10만 개의 아이템을 가상 스크롤로 구현하시오.
//
// 요구사항:
//   1. 총 100,000개의 데이터를 렌더링하되, 화면에 보이는 것만 DOM에 존재해야 한다
//   2. 스크롤이 부드럽게 동작해야 한다 (requestAnimationFrame 활용 가능)
//   3. 아이템 높이는 고정 48px로 한다
//   4. 현재 렌더링된 DOM 노드 수를 화면에 표시한다 (성능 확인용)
//   5. 스크롤 위치를 유지하며 아이템 데이터가 정확히 표시된다
//
// 주어진 데이터:
const TOTAL_COUNT = 100_000;
const ITEM_HEIGHT = 48; // px (고정)
const OVERSCAN    = 3;  // 화면 밖 추가 렌더링 개수

interface VItem { id: number; title: string; category: string; value: number; }
const generateItems = (start: number, end: number): VItem[] =>
  Array.from({ length: end - start }, (_, i) => ({
    id:       start + i + 1,
    title:    `아이템 ${start + i + 1}`,
    category: ['A', 'B', 'C', 'D'][( start + i) % 4],
    value:    Math.round(Math.random() * 1000),
  }));

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<number>          → scrollTop
//   - useRef<HTMLDivElement>    → 스크롤 컨테이너
//   - useMemo                   → 렌더링 범위 계산 (메모이제이션 필수)
//
// ─── 핵심 계산 ───────────────────────────────────
//   const totalHeight = TOTAL_COUNT * ITEM_HEIGHT        // 가상 전체 높이
//   const startIdx    = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN)
//   const endIdx      = Math.min(TOTAL_COUNT, startIdx + visibleCount + OVERSCAN * 2)
//   const offsetY     = startIdx * ITEM_HEIGHT           // 렌더 영역 위치
//
// ─── DOM 구조 ─────────────────────────────────────
//   <div style={{ height: containerH, overflow: 'auto' }}>
//     <div style={{ height: totalHeight, position: 'relative' }}>
//       <div style={{ transform: `translateY(${offsetY}px)` }}>
//         {visibleItems.map(...)}
//       </div>
//     </div>
//   </div>

export default function VirtualScrollDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
