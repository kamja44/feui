// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// generateItems 함수로 생성된 10만 개의 아이템을 가상 스크롤로 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 100,000개의 데이터 중 화면에 보이는 것만 DOM에 렌더링한다
//   2. 아이템 높이는 고정 48px
//   3. 스크롤이 부드럽게 동작해야 한다
//   4. 현재 렌더링된 DOM 노드 수를 표시한다 (성능 확인용)
//
// 주어진 데이터:
const TOTAL     = 100_000;
const ITEM_H    = 48;
const OVERSCAN  = 3;
interface VItem { id: number; title: string; category: string; }
const generateItems = (start: number, end: number): VItem[] =>
  Array.from({ length: end - start }, (_, i) => ({
    id:       start + i + 1,
    title:    `아이템 ${start + i + 1}`,
    category: ['A', 'B', 'C', 'D'][(start + i) % 4],
  }));

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 가상 스크롤 핵심 계산 ───────────────────────
//   holder.style.height = `${TOTAL * ITEM_H}px`    // 전체 가상 높이
//
//   const render = () => {
//     const scrollTop   = container.scrollTop
//     const viewH       = container.clientHeight
//     const startIdx    = Math.max(0, Math.floor(scrollTop / ITEM_H) - OVERSCAN)
//     const endIdx      = Math.min(TOTAL, Math.ceil((scrollTop + viewH) / ITEM_H) + OVERSCAN)
//     const items       = generateItems(startIdx, endIdx)
//
//     visibleArea.style.transform = `translateY(${startIdx * ITEM_H}px)`
//     visibleArea.innerHTML = ''
//     items.forEach(item => {
//       const el = document.createElement('div')
//       el.className = 'v-item'
//       el.style.height = ITEM_H + 'px'
//       el.textContent = `[${item.category}] ${item.title}`
//       visibleArea.appendChild(el)
//     })
//     document.getElementById('total-count')!.textContent = String(TOTAL)
//   }
//   container.addEventListener('scroll', render, { passive: true })
//   render()

// TODO: 위 문제와 힌트를 참고하여 구현하세요
