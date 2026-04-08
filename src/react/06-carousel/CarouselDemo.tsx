// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 slides 배열을 이용하여 이미지 캐러셀을 구현하시오.
//
// 요구사항:
//   1. 슬라이드를 좌우로 넘길 수 있는 이전/다음 버튼이 있다
//   2. 하단에 현재 슬라이드를 나타내는 dot 인디케이터가 있다
//   3. 3초마다 자동으로 다음 슬라이드로 넘어간다
//   4. 마우스를 올리면 자동 슬라이드가 일시정지된다
//   5. 터치/마우스 드래그로 슬라이드를 넘길 수 있다
//   6. 마지막 슬라이드에서 다음으로 가면 첫 번째로 돌아온다 (무한 루프)
//
// 주어진 데이터:
const slides = [
  { id: 1, title: 'React 19 출시',      desc: 'Actions, 새로운 훅, 향상된 성능',        color: '#1a1a2e', accent: '#58a6ff' },
  { id: 2, title: 'TypeScript 5.5',     desc: '추론 성능 향상과 새로운 유틸리티 타입',    color: '#16213e', accent: '#bc8cff' },
  { id: 3, title: 'Vite 8 릴리즈',      desc: '더 빠른 HMR, Rolldown 기반 새 번들러',   color: '#1a2a1a', accent: '#3fb950' },
  { id: 4, title: 'Next.js 15',         desc: 'App Router 안정화, PPR(부분 사전렌더링)', color: '#2a1a1a', accent: '#f85149' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<number>        → 현재 슬라이드 인덱스
//   - useRef<number>          → setInterval ID (자동 슬라이드)
//   - useRef<HTMLDivElement>  → 드래그 이벤트 대상
//   - useEffect               → 자동 슬라이드, cleanup으로 clearInterval 필수
//
// ─── 슬라이드 이동 원리 ──────────────────────────
//   - transform: translateX(-{index * 100}%)
//   - transition: transform 0.4s ease
//
// ─── 터치/드래그 (Pointer Events) ───────────────
//   - onPointerDown: startX 저장, setPointerCapture
//   - onPointerUp: deltaX > 50 → 이전, deltaX < -50 → 다음
//
// ─── 자동 슬라이드 ───────────────────────────────
//   - setInterval(next, 3000)
//   - mouseenter: clearInterval, mouseleave: 재시작
//   - useEffect cleanup에서 clearInterval 필수

export default function CarouselDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
