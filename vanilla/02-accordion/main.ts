// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 faqs 배열을 이용하여 FAQ 아코디언을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 항목 클릭 시 답변이 펼쳐지고 다시 클릭 시 닫힌다
//   2. 단일 오픈 모드: 하나를 열면 기존에 열린 것은 자동으로 닫힌다
//   3. 펼침/닫힘 시 높이 애니메이션이 부드럽게 동작한다 (CSS Grid 트릭 권장)
//   4. 화살표(▼) 아이콘이 열림 시 180도 회전한다
//
// 주어진 데이터:
const faqs = [
  { id: 1, q: 'React와 Vue의 차이는 무엇인가요?',         a: 'React는 UI 라이브러리이고, Vue는 프레임워크입니다.' },
  { id: 2, q: 'TypeScript를 사용해야 하는 이유는?',       a: '정적 타입 검사로 런타임 오류를 사전에 방지합니다.' },
  { id: 3, q: 'useState와 useReducer의 차이는?',          a: 'useState는 단순 상태에, useReducer는 복잡한 로직에 적합합니다.' },
  { id: 4, q: 'CSS-in-JS vs CSS Modules 비교',            a: 'CSS Modules는 성능이 좋고, CSS-in-JS는 동적 스타일에 편리합니다.' },
  { id: 5, q: 'Vite가 Webpack보다 빠른 이유는?',          a: 'ESM 네이티브 사용과 esbuild 덕분에 Cold Start가 빠릅니다.' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── DOM 생성 패턴 ────────────────────────────────
//   faqs.forEach(faq => {
//     const item    = document.createElement('div')
//     const btn     = document.createElement('button')
//     const wrapper = document.createElement('div')  // grid 래퍼
//     const panel   = document.createElement('div')  // overflow:hidden 내부
//     btn.innerHTML = `${faq.q} <span class="arrow">▼</span>`
//     btn.setAttribute('aria-expanded', 'false')
//     btn.setAttribute('aria-controls', `panel-${faq.id}`)
//     panel.textContent = faq.a
//     wrapper.className = 'panel-wrapper'
//     wrapper.appendChild(panel)
//     item.append(btn, wrapper)
//     container.appendChild(item)
//   })
//
// ─── CSS Grid 높이 트릭 ──────────────────────────
//   .panel-wrapper { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.3s ease; }
//   .panel-wrapper.open { grid-template-rows:1fr; }
//   .panel-wrapper > div { overflow:hidden; }

// TODO: 위 문제와 힌트를 참고하여 구현하세요
