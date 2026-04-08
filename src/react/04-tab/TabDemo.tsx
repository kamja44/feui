// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 profile 객체를 이용하여 사용자 프로필 탭 UI를 구현하시오.
//
// 요구사항:
//   1. 정보 / 활동 / 설정 세 개의 탭을 렌더링한다
//   2. 탭 클릭 시 해당 콘텐츠로 전환된다
//   3. 활성 탭 아래에 슬라이딩 언더라인 인디케이터가 있다
//   4. ArrowLeft / ArrowRight 키보드로 탭 이동이 가능하다
//   5. aria-selected, aria-controls, role="tablist" 등 접근성을 지킨다
//
// 주어진 데이터:
const profile = {
  name:     '김개발',
  email:    'dev.kim@example.com',
  avatar:   '🧑‍💻',
  joinDate: '2022-03-15',
  info: {
    bio:      'React와 TypeScript를 좋아하는 프론트엔드 개발자입니다.',
    location: '서울, 대한민국',
    website:  'https://devkim.io',
  },
  activity: {
    posts:    42,
    likes:    128,
    comments: 37,
    recent: ['새 프로젝트 시작', 'CSS 트릭 공유', 'TypeScript tips 포스팅'],
  },
  settings: {
    notifications: true,
    darkMode:      false,
    language:      'ko',
  },
};

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ✅ 사용 훅
//   - useState<string>    → 활성 탭 ID ('info' | 'activity' | 'settings')
//   - useRef<HTMLButtonElement[]> → 각 탭 버튼의 ref 배열 (Indicator 위치 계산)
//
// ─── Indicator 애니메이션 ────────────────────────
//   - 활성 탭 버튼의 offsetLeft, offsetWidth 읽기
//   - indicator.style.left  = tab.offsetLeft + 'px'
//   - indicator.style.width = tab.offsetWidth + 'px'
//   - transition: left 0.3s ease, width 0.3s ease
//
// ─── 키보드 내비게이션 ───────────────────────────
//   - ArrowRight: (currentIdx + 1) % tabs.length
//   - ArrowLeft:  (currentIdx - 1 + tabs.length) % tabs.length

export default function TabDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
