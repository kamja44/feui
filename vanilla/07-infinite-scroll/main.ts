// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// generatePosts 함수로 생성된 포스트를 무한 스크롤로 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 초기 로드 시 10개의 포스트를 보여준다
//   2. 스크롤을 내려 하단에 도달하면 10개씩 추가 로드된다
//   3. 로딩 중 shimmer 스켈레톤 3개를 표시한다
//   4. 50개 이상이면 "모든 포스트를 불러왔습니다" 표시
//   5. IntersectionObserver를 사용한다
//
// 주어진 데이터:
interface Post { id: number; title: string; author: string; date: string; }
const generatePosts = (page: number, size = 10): Post[] =>
  Array.from({ length: size }, (_, i) => {
    const id = page * size + i + 1;
    return {
      id,
      title:  `포스트 #${id}: ${['React 성능 최적화', 'TypeScript 고급 패턴', 'CSS 애니메이션', 'API 설계 원칙'][id % 4]}`,
      author: ['김개발', '이코딩', '박프론트', '최백엔드'][id % 4],
      date:   new Date(2024, 0, id).toLocaleDateString('ko-KR'),
    };
  });

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 상태 변수 ───────────────────────────────────
//   let page = 0, loading = false, hasMore = true
//   const LIMIT = 50, PAGE_SIZE = 10
//
// ─── IntersectionObserver ────────────────────────
//   const sentinel = document.getElementById('sentinel')!
//   const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting && !loading && hasMore) loadMore()
//   }, { threshold: 0.1 })
//   observer.observe(sentinel)
//
// ─── loadMore 함수 ────────────────────────────────
//   const loadMore = async () => {
//     loading = true; showSkeletons(3)
//     await delay(800)                    // API 호출 시뮬레이션
//     removeSkeletons()
//     generatePosts(page++, PAGE_SIZE).forEach(appendPost)
//     if (page * PAGE_SIZE >= LIMIT) { hasMore = false; showEndMsg(); observer.disconnect() }
//     loading = false
//   }

// TODO: 위 문제와 힌트를 참고하여 구현하세요
