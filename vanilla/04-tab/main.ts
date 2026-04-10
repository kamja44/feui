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
  name: "김개발",
  email: "dev.kim@example.com",
  info: {
    bio: "React와 TypeScript를 좋아하는 프론트엔드 개발자",
    location: "서울",
    website: "https://devkim.io",
  },
  activity: {
    posts: 42,
    likes: 128,
    comments: 37,
    recent: ["새 프로젝트 시작", "CSS 트릭 공유", "TypeScript tips"],
  },
  settings: { notifications: true, darkMode: false, language: "ko" },
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
function createTabs() {
  const container = document.querySelector("#tab-container")!;
  container.innerHTML = "";

  const tablist = document.createElement("div");
  tablist.setAttribute("role", "tablist");
  tablist.id = "tablist";

  const indicator = document.createElement("div");
  indicator.className = "tab-indicator";

  const tabs: HTMLButtonElement[] = [];
  const panels: HTMLElement[] = [];
  const tabKeys = ["info", "activity", "settings"] as const;

  const tabLabels = {
    info: "정보",
    activity: "활동",
    settings: "설정",
  };

  tabKeys.forEach((key, i) => {
    const btn = document.createElement("button");
    const panel = document.createElement("div");

    btn.className = i === 0 ? "tab-btn active" : "tab-btn";
    btn.textContent = tabLabels[key];

    panel.className = "tabpanel";
    panel.hidden = i !== 0;

    //내용
    if (key === "info") {
      panel.innerHTML = `
        <h3>${profile.name} (${profile.email})</h3>
        <p>${profile[key].bio}</p>
        <ul><li>위치: ${profile[key].location}</li></ul>
      `;
    } else if (key === "activity") {
      panel.innerHTML = `
        <h3>활동 요약</h3>
        <ul>
          <li>게시글: ${profile[key].posts}</li>
          <li>좋아요: ${profile[key].likes}</li>
        </ul>
        <h4>최근 활동</h4>
        <ul>${profile[key].recent.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
    } else if (key === "settings") {
      panel.innerHTML = `
        <h3>설정</h3>
        <p>알림: ${profile[key].notifications ? "ON" : "OFF"}</p>
        <p>다크모드: ${profile[key].darkMode ? "ON" : "OFF"}</p>
      `;
    }

    btn.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => (p.hidden = true));

      btn.classList.add("active");
      panel.hidden = false;

      indicator.style.left = btn.offsetLeft + "px";
      indicator.style.width = btn.offsetWidth + "px";
    });

    tabs.push(btn);
    panels.push(panel);
    tablist.append(btn);
  });
  tablist.append(indicator);
  container.append(tablist, ...panels);

  requestAnimationFrame(() => {
    indicator.style.left = tabs[0].offsetLeft + "px";
    indicator.style.width = tabs[0].offsetWidth + "px";
  });
}
createTabs();
