// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 photos 배열을 이용하여 사진 갤러리를 Lazy Loading으로 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 이미지가 뷰포트에 진입할 때만 로드된다 (초기에는 src 없음)
//   2. 로드 전: 회색 shimmer 스켈레톤 표시
//   3. 로드 완료: opacity 0→1 fade-in 애니메이션
//   4. 로드 실패 시: "이미지를 불러올 수 없습니다" 표시
//
// 주어진 데이터:
const photos = Array.from({ length: 20 }, (_, i) => ({
  id:     i + 1,
  src:    `https://picsum.photos/seed/${i + 10}/400/300`,
  alt:    `사진 ${i + 1}`,
  author: ['김사진', '이포토', '박카메라', '최렌즈'][i % 4],
}));

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── IntersectionObserver 패턴 ───────────────────
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) return
//       const img = entry.target as HTMLImageElement
//       img.src = img.dataset.src!           // data-src → src 로 실제 로드
//       img.onload  = () => img.classList.add('loaded')
//       img.onerror = () => img.classList.add('error')
//       observer.unobserve(img)              // 로드 완료 후 관찰 중단
//     })
//   }, { threshold: 0.1 })
//
// ─── 이미지 카드 생성 ────────────────────────────
//   photos.forEach(photo => {
//     const card = document.createElement('div')
//     card.className = 'img-card'
//     const img = document.createElement('img')
//     img.className = 'lazy-img'
//     img.dataset.src = photo.src    // 실제 src는 아직 지정하지 않음
//     img.alt = photo.alt
//     card.appendChild(img)
//     grid.appendChild(card)
//     observer.observe(img)          // 관찰 시작
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
