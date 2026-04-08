// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 profile 객체를 이용하여 사용자 프로필 탭 UI를 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 정보 / 활동 / 설정 세 개의 탭을 렌더링한다
//   2. 탭 클릭 시 해당 콘텐츠로 전환된다
//   3. 활성 탭 아래에 슬라이딩 언더라인 인디케이터가 있다
//   4. ArrowLeft / ArrowRight 키보드로 탭 이동이 가능하다
//
// 주어진 데이터:
const profile = {
  name:     '김개발',
  email:    'dev.kim@example.com',
  info: { bio: 'React와 TypeScript를 좋아하는 프론트엔드 개발자', location: '서울', website: 'https://devkim.io' },
  activity: { posts: 42, likes: 128, comments: 37, recent: ['새 프로젝트 시작', 'CSS 트릭 공유', 'TypeScript tips'] },
  settings: { notifications: true, darkMode: false, language: 'ko' },
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 탭 전환 패턴 ────────────────────────────────
//   const tabs   = [...document.querySelectorAll<HTMLButtonElement>('[role="tab"]')]
//   const panels = [...document.querySelectorAll<HTMLElement>('[role="tabpanel"]')]
//
//   const activate = (tab: HTMLButtonElement) => {
//     tabs.forEach(t => { t.setAttribute('aria-selected', 'false'); t.tabIndex = -1 })
//     panels.forEach(p => p.hidden = true)
//     tab.setAttribute('aria-selected', 'true')
//     tab.tabIndex = 0
//     document.getElementById(tab.getAttribute('aria-controls')!)!.hidden = false
//     updateIndicator(tab)
//   }
//
// ─── Indicator 업데이트 ──────────────────────────
//   const indicator = document.querySelector<HTMLElement>('.tab-indicator')!
//   const updateIndicator = (tab: HTMLButtonElement) => {
//     indicator.style.left  = tab.offsetLeft + 'px'
//     indicator.style.width = tab.offsetWidth + 'px'
//   }
//
// ─── 키보드 내비게이션 ───────────────────────────
//   document.getElementById('tablist')!.addEventListener('keydown', e => {
//     const idx = tabs.indexOf(document.activeElement as HTMLButtonElement)
//     if (e.key === 'ArrowRight') tabs[(idx + 1) % tabs.length].focus()
//     if (e.key === 'ArrowLeft')  tabs[(idx - 1 + tabs.length) % tabs.length].focus()
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
