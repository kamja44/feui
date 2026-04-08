// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 countries 배열을 이용하여 국가 검색 자동완성을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 입력 시 300ms debounce 후 검색 결과를 드롭다운으로 표시한다
//   2. 검색어와 일치하는 부분을 <mark> 태그로 하이라이트한다
//   3. ↑↓ 키로 결과 탐색, Enter로 선택, Escape로 닫기
//   4. 드롭다운 외부 클릭 시 닫힌다
//   5. 결과 없으면 "검색 결과가 없습니다" 표시
//
// 주어진 데이터:
const countries = [
  { code: 'KR', name: '대한민국', emoji: '🇰🇷' },
  { code: 'US', name: '미국',     emoji: '🇺🇸' },
  { code: 'JP', name: '일본',     emoji: '🇯🇵' },
  { code: 'CN', name: '중국',     emoji: '🇨🇳' },
  { code: 'GB', name: '영국',     emoji: '🇬🇧' },
  { code: 'FR', name: '프랑스',   emoji: '🇫🇷' },
  { code: 'DE', name: '독일',     emoji: '🇩🇪' },
  { code: 'CA', name: '캐나다',   emoji: '🇨🇦' },
  { code: 'AU', name: '호주',     emoji: '🇦🇺' },
  { code: 'SG', name: '싱가포르', emoji: '🇸🇬' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── Debounce ────────────────────────────────────
//   let timer: ReturnType<typeof setTimeout>
//   input.addEventListener('input', () => {
//     clearTimeout(timer)
//     timer = setTimeout(() => renderList(search(input.value)), 300)
//   })
//
// ─── 하이라이트 ──────────────────────────────────
//   const highlight = (text: string, q: string) =>
//     text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>')
//
// ─── 키보드 탐색 ─────────────────────────────────
//   let selectedIdx = -1
//   input.addEventListener('keydown', e => {
//     const items = [...list.querySelectorAll<HTMLLIElement>('[role="option"]')]
//     if (e.key === 'ArrowDown') selectedIdx = Math.min(selectedIdx + 1, items.length - 1)
//     if (e.key === 'ArrowUp')   selectedIdx = Math.max(selectedIdx - 1, 0)
//     if (e.key === 'Enter' && selectedIdx >= 0) select(items[selectedIdx])
//     if (e.key === 'Escape') { list.hidden = true; selectedIdx = -1 }
//     items.forEach((item, i) => item.classList.toggle('active', i === selectedIdx))
//   })
//
// ─── 외부 클릭 닫기 ──────────────────────────────
//   document.addEventListener('click', e => {
//     if (!container.contains(e.target as Node)) list.hidden = true
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
