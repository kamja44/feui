// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 countries 배열을 이용하여 국가 검색 자동완성을 구현하시오.
//
// 요구사항:
//   1. 입력 시 300ms debounce 후 검색 결과를 드롭다운으로 표시한다
//   2. 검색어와 일치하는 부분은 하이라이트(노란 배경)로 강조된다
//   3. ↑↓ 화살표 키로 결과를 탐색하고 Enter로 선택한다
//   4. Escape 키로 드롭다운을 닫는다
//   5. 드롭다운 외부를 클릭하면 닫힌다
//   6. 결과가 없으면 "검색 결과가 없습니다" 메시지를 표시한다
//
// 주어진 데이터:
const countries = [
  { code: 'KR', name: '대한민국',    emoji: '🇰🇷' },
  { code: 'US', name: '미국',        emoji: '🇺🇸' },
  { code: 'JP', name: '일본',        emoji: '🇯🇵' },
  { code: 'CN', name: '중국',        emoji: '🇨🇳' },
  { code: 'GB', name: '영국',        emoji: '🇬🇧' },
  { code: 'FR', name: '프랑스',      emoji: '🇫🇷' },
  { code: 'DE', name: '독일',        emoji: '🇩🇪' },
  { code: 'CA', name: '캐나다',      emoji: '🇨🇦' },
  { code: 'AU', name: '호주',        emoji: '🇦🇺' },
  { code: 'BR', name: '브라질',      emoji: '🇧🇷' },
  { code: 'IN', name: '인도',        emoji: '🇮🇳' },
  { code: 'SG', name: '싱가포르',    emoji: '🇸🇬' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅 & API
//   - useState<string>        → 입력값
//   - useState<Country[]>     → 검색 결과
//   - useState<number>        → 키보드 선택 인덱스 (-1이면 미선택)
//   - useRef<ReturnType<typeof setTimeout>> → debounce 타이머
//   - useRef<HTMLDivElement>  → 외부 클릭 감지
//
// ─── Debounce ────────────────────────────────────
//   - onChange마다 clearTimeout + setTimeout(검색, 300)
//
// ─── 하이라이트 ──────────────────────────────────
//   - 텍스트를 검색어 기준으로 split 후 일치 부분에 <mark> 적용
//   - RegExp(query, 'gi') 사용
//
// ─── 외부 클릭 감지 ──────────────────────────────
//   - useEffect로 mousedown 이벤트
//   - !containerRef.current.contains(e.target) → 닫기

export default function AutocompleteDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
