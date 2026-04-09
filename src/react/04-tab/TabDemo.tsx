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

import { useEffect, useRef, useState } from "react";
import "./TabDemo.css"; // 🔥 추가된 CSS

// 주어진 데이터:
const profile = {
  name: "김개발",
  email: "dev.kim@example.com",
  avatar: "🧑‍💻",
  joinDate: "2022-03-15",
  info: {
    bio: "React와 TypeScript를 좋아하는 프론트엔드 개발자입니다.",
    location: "서울, 대한민국",
    website: "https://devkim.io",
  },
  activity: {
    posts: 42,
    likes: 128,
    comments: 37,
    recent: ["새 프로젝트 시작", "CSS 트릭 공유", "TypeScript tips 포스팅"],
  },
  settings: {
    notifications: true,
    darkMode: false,
    language: "ko",
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

const TAB_KEYS = ["info", "activity", "settings"] as const;
type TabKey = (typeof TAB_KEYS)[number]; // "info" | "activity" | "settings"
const TAB_LABELS: Record<TabKey, string> = {
  info: "정보",
  activity: "활동",
  settings: "설정",
};

export default function TabDemo() {
  // 상태
  const [activeTab, setActiveTab] = useState<TabKey>("info");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  // 요소
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // 인디케이터 업데이트
  const updateIndicator = () => {
    const activeIndex = TAB_KEYS.indexOf(activeTab);
    const activeBtn = tabsRef.current[activeIndex];

    // 버튼의 실제 크기와 위치를 읽어와서 state업데이트
    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const activeIndex = TAB_KEYS.indexOf(activeTab);
    let nextIndex = activeIndex;

    if (e.key === "ArrowRight") {
      nextIndex = (activeIndex + 1) % TAB_KEYS.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (activeIndex - 1 + TAB_KEYS.length) % TAB_KEYS.length;
    }

    if (nextIndex !== activeIndex) {
      const nextTab = TAB_KEYS[nextIndex];
      setActiveTab(nextTab);
      tabsRef.current[nextIndex]?.focus();
    }
  };

  // 4. 패널 화면을 각 상태별로 반환해주는 렌더 함수
  const renderPanelContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <>
            <h3>
              {profile.name} ({profile.email})
            </h3>
            <p>{profile.info.bio}</p>
            <ul>
              <li>위치: {profile.info.location}</li>
              <li>
                웹사이트:{" "}
                <a href={profile.info.website} target="_blank" rel="noreferrer">
                  {profile.info.website}
                </a>
              </li>
            </ul>
          </>
        );
      case "activity":
        return (
          <>
            <h3>활동 요약</h3>
            <ul>
              <li>게시글: {profile.activity.posts}</li>
              <li>좋아요: {profile.activity.likes}</li>
            </ul>
            <h4>최근 활동</h4>
            <ul>
              {profile.activity.recent.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        );
      case "settings":
        return (
          <>
            <h3>설정</h3>
            <p>알림: {profile.settings.notifications ? "ON" : "OFF"}</p>
            <p>다크모드: {profile.settings.darkMode ? "ON" : "OFF"}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div id="tab-container" className="tab-container">
      {/* 탭 */}
      <div rold="tablist" className="tablist" onKeyDown={handleKeyDown}>
        {TAB_KEYS.map((key, index) => {
          const isActive = activeTab === key;

          return (
            <button
              key={key}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${key}`}
              id={`tab-${key}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(key)}
            >
              {TAB_LABELS[key]}
            </button>
          );
        })}
        {/* 인디케이터 */}
        <div
          className="tab-indicator"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>

      {/* 패널 */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="tabpanel"
      >
        {renderPanelContent()}
      </div>
    </div>
  );
}
