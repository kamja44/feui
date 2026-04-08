// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 products 배열을 이용하여 상품 목록과 상세 모달을 구현하시오.
//
// 요구사항:
//   1. 상품 카드 목록을 렌더링한다 (이름, 가격, 카테고리)
//   2. 카드 클릭 시 해당 상품의 상세 정보가 모달로 열린다
//   3. 모달은 ESC 키, X 버튼, 오버레이 클릭으로 닫힌다
//   4. 모달이 열려 있을 때 배경 스크롤이 잠긴다
//   5. 모달 내 포커스가 갇혀야 한다 (Tab 키로 모달 밖으로 나가지 않음)
//   6. ReactDOM.createPortal을 사용하여 document.body에 렌더링한다
//
// 주어진 데이터:
const products = [
  { id: 1, name: 'MacBook Pro 14"',  price: 2_490_000, category: 'Laptop',  desc: 'Apple M3 Pro 칩, 18GB RAM, 512GB SSD. 크리에이터를 위한 최강 성능의 노트북.' },
  { id: 2, name: 'iPhone 15 Pro',    price: 1_550_000, category: 'Phone',   desc: 'A17 Pro 칩, 티타늄 디자인, 프로급 카메라 시스템. 가장 강력한 iPhone.' },
  { id: 3, name: 'AirPods Pro 2세대',price:   359_000, category: 'Audio',   desc: '적응형 오디오, 개인화된 공간 음향. 완벽한 노이즈 캔슬링 경험.' },
  { id: 4, name: 'iPad Air M2',      price:   929_000, category: 'Tablet',  desc: 'M2 칩 탑재, 11인치 Liquid Retina 디스플레이. 가벼움과 성능의 완벽한 균형.' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅 & API
//   - useState<Product | null>   → 선택된 상품 (null이면 모달 닫힘)
//   - useRef<HTMLDivElement>     → 모달 컨테이너 (포커스 트랩)
//   - useEffect                  → ESC 이벤트, 스크롤 잠금
//   - ReactDOM.createPortal()    → document.body에 렌더링
//
// ─── Portal 사용 ─────────────────────────────────
//   - ReactDOM.createPortal(<Modal />, document.body)
//
// ─── 포커스 트랩 ─────────────────────────────────
//   - 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
//   - Tab: 마지막 → 첫 번째 / Shift+Tab: 첫 번째 → 마지막
//
// ─── 스크롤 잠금 ─────────────────────────────────
//   - document.body.style.overflow = 'hidden' / ''
//   - useEffect cleanup에서 반드시 복원

export default function ModalDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
