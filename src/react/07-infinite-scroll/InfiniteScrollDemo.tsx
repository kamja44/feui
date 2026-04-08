// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// generatePosts 함수로 생성된 포스트 목록을 무한 스크롤로 구현하시오.
//
// 요구사항:
//   1. 초기 로드 시 10개의 포스트를 보여준다
//   2. 스크롤을 내려 하단에 도달하면 10개씩 추가 로드된다
//   3. 로딩 중에 스켈레톤 UI 3개를 보여준다
//   4. 50개 이상이 되면 더 이상 로드하지 않고 "모든 포스트를 불러왔습니다" 메시지를 표시한다
//   5. IntersectionObserver를 사용한다 (scroll 이벤트 X)
//
// 주어진 데이터 생성 함수:
interface Post { id: number; title: string; author: string; date: string; likes: number; }
const generatePosts = (page: number, size = 10): Post[] =>
  Array.from({ length: size }, (_, i) => {
    const id = page * size + i + 1;
    return {
      id,
      title:  `포스트 #${id}: ${['React 성능 최적화', 'TypeScript 고급 패턴', 'CSS 애니메이션 기법', 'API 설계 원칙', 'Git 브랜치 전략'][id % 5]}`,
      author: ['김개발', '이코딩', '박프론트', '최백엔드'][id % 4],
      date:   new Date(2024, 0, id).toLocaleDateString('ko-KR'),
      likes:  Math.floor(Math.random() * 100),
    };
  });

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅 & API
//   - useState<Post[]>      → 누적 포스트 목록
//   - useState<boolean>     → 로딩 상태
//   - useRef<HTMLDivElement>→ 감시할 sentinel 요소
//   - useEffect             → IntersectionObserver 등록/해제
//
// ─── IntersectionObserver 패턴 ──────────────────
//   const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting && !loading && hasMore) loadMore()
//   }, { threshold: 0.1 })
//   observer.observe(sentinelRef.current)
//   // cleanup: observer.disconnect()
//
// ─── 스켈레톤 UI ─────────────────────────────────
//   - 로딩 중: 회색 박스 + shimmer 애니메이션
//   - @keyframes shimmer { background-position 이동 }

export default function InfiniteScrollDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
