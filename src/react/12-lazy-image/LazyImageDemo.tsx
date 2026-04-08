// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 photos 배열을 이용하여 사진 갤러리를 Lazy Loading으로 구현하시오.
//
// 요구사항:
//   1. 이미지가 뷰포트에 진입할 때만 로드된다 (초기 src 없이 시작)
//   2. 이미지 로드 전: 회색 shimmer 스켈레톤
//   3. 이미지 로드 완료: fade-in 애니메이션으로 전환
//   4. 로드 실패 시: "이미지를 불러올 수 없습니다" 표시
//   5. useLazyImage() 커스텀 훅으로 로직을 분리한다
//
// 주어진 데이터:
const photos = Array.from({ length: 20 }, (_, i) => ({
  id:     i + 1,
  src:    `https://picsum.photos/seed/${i + 10}/400/300`,
  alt:    `사진 ${i + 1}`,
  author: ['김사진', '이포토', '박카메라', '최렌즈'][i % 4],
  likes:  Math.floor(Math.random() * 500) + 10,
}));

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ useLazyImage 커스텀 훅
//   const useLazyImage = (src: string) => {
//     const [loaded, setLoaded] = useState(false)
//     const [error,  setError]  = useState(false)
//     const imgRef = useRef<HTMLImageElement>(null)
//
//     useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => {
//         if (!entry.isIntersecting) return
//         imgRef.current!.src = src
//         imgRef.current!.onload  = () => setLoaded(true)
//         imgRef.current!.onerror = () => setError(true)
//         observer.disconnect()
//       })
//       if (imgRef.current) observer.observe(imgRef.current)
//       return () => observer.disconnect()
//     }, [src])
//
//     return { imgRef, loaded, error }
//   }
//
// ─── Shimmer 애니메이션 ───────────────────────────
//   - background: linear-gradient(90deg, #21262d 25%, #30363d 50%, #21262d 75%)
//   - background-size: 200% 100%
//   - animation: shimmer 1.5s infinite
//   - @keyframes shimmer { to { background-position: -200% 0 } }

export default function LazyImageDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
