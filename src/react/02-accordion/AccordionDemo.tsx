// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 faqs 배열을 이용하여 FAQ 아코디언을 구현하시오.
//
// 요구사항:
//   1. 항목 클릭 시 답변이 펼쳐지고 다시 클릭 시 닫힌다
//   2. 단일 오픈 모드: 하나를 열면 기존에 열린 것은 자동으로 닫힌다
//   3. 펼침/닫힘 시 높이 애니메이션이 부드럽게 동작한다
//   4. 화살표(▼) 아이콘이 열림 시 180도 회전한다
//   5. (추가) 버튼을 만들어 단일/다중 오픈 모드를 토글할 수 있게 한다
//
// 주어진 데이터:
const faqs = [
  { id: 1, question: 'React와 Vue의 차이는 무엇인가요?',        answer: 'React는 UI 라이브러리이고, Vue는 프레임워크입니다. React는 JSX를 사용하며 더 유연하고, Vue는 템플릿 문법으로 진입 장벽이 낮습니다.' },
  { id: 2, question: 'TypeScript를 사용해야 하는 이유는?',      answer: '정적 타입 검사로 런타임 오류를 사전에 방지할 수 있고, IDE 자동완성과 리팩터링 지원이 강력합니다.' },
  { id: 3, question: 'useState와 useReducer의 차이는?',         answer: 'useState는 단순한 상태에, useReducer는 복잡한 상태 로직이나 다음 상태가 이전 상태에 의존할 때 적합합니다.' },
  { id: 4, question: 'CSS-in-JS vs CSS Modules 무엇이 좋나요?', answer: 'CSS Modules는 빌드 타임에 처리되어 성능이 좋고, CSS-in-JS는 동적 스타일링이 편리합니다. 프로젝트 성격에 따라 선택하세요.' },
  { id: 5, question: 'Vite가 Webpack보다 빠른 이유는?',         answer: 'Vite는 개발 시 ESM을 네이티브로 사용하고 esbuild로 번들링하여 Cold Start가 매우 빠릅니다.' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<number | null>   → 단일 오픈: 열린 항목 인덱스
//   - useState<Set<number>>     → 다중 오픈: 열린 항목 집합
//
// ─── 높이 애니메이션 (CSS Grid 트릭 권장) ─────────
//   - 래퍼: display:grid; grid-template-rows:0fr → 1fr
//   - 내부 자식: overflow:hidden
//   - transition: grid-template-rows 0.3s ease
//
// ─── 단일/다중 전환 ──────────────────────────────
//   - 단일: setOpen(prev => prev === idx ? null : idx)
//   - 다중: new Set(prev).add/delete
//
// ─── 화살표 회전 ─────────────────────────────────
//   - transform: rotate(0deg) → rotate(180deg)
//   - transition: transform 0.3s ease

export default function AccordionDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
