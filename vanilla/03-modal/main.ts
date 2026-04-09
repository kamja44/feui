// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 products 배열을 이용하여 상품 목록과 상세 모달을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 상품 카드 목록을 렌더링한다
//   2. 카드 클릭 시 해당 상품 상세 정보가 모달로 열린다
//   3. ESC 키, X 버튼, 오버레이 클릭으로 모달을 닫는다
//   4. 모달이 열려 있을 때 배경 스크롤이 잠긴다
//   5. 모달 내 포커스가 갇혀야 한다 (Tab 키가 모달 밖으로 나가지 않음)
//
// 주어진 데이터:
const products = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    price: 2_490_000,
    category: "Laptop",
    desc: "Apple M3 Pro 칩, 18GB RAM, 512GB SSD.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1_550_000,
    category: "Phone",
    desc: "A17 Pro 칩, 티타늄 디자인, 프로급 카메라.",
  },
  {
    id: 3,
    name: "AirPods Pro 2세대",
    price: 359_000,
    category: "Audio",
    desc: "적응형 오디오, 개인화된 공간 음향.",
  },
  {
    id: 4,
    name: "iPad Air M2",
    price: 929_000,
    category: "Tablet",
    desc: "M2 칩, 11인치 Liquid Retina 디스플레이.",
  },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 모달 열기/닫기 ──────────────────────────────
//   const openModal = (product: typeof products[0]) => {
//     modalTitle.textContent = product.name
//     modalDesc.textContent  = product.desc
//     overlay.hidden = false
//     document.body.style.overflow = 'hidden'
//     firstFocusable?.focus()
//   }
//   const closeModal = () => {
//     overlay.hidden = true
//     document.body.style.overflow = ''
//     triggerBtn?.focus()  // 모달 열었던 버튼으로 포커스 복귀
//   }
//
// ─── 포커스 트랩 ─────────────────────────────────
//   const FOCUSABLE = 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
//   document.addEventListener('keydown', e => {
//     if (overlay.hidden) return
//     const els = [...overlay.querySelectorAll<HTMLElement>(FOCUSABLE)]
//     if (e.key === 'Tab') {
//       if (e.shiftKey && document.activeElement === els[0]) { e.preventDefault(); els.at(-1)?.focus() }
//       else if (!e.shiftKey && document.activeElement === els.at(-1)) { e.preventDefault(); els[0].focus() }
//     }
//     if (e.key === 'Escape') closeModal()
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
function createModal() {
  const section = document.querySelector(".section");
  const overlay = document.querySelector("#modal-overlay");
  const modalTitle = document.querySelector("#modal-title");
  const modalDesc = document.querySelector("#modal p");
  const closeBtn = document.querySelector("#close-modal");

  const grid = document.createElement("div");
  grid.className = "card-grid";

  products.map((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="category">${product.category}</div>
      <h3>${product.name}</h3>
      <div class="price">${product.price.toLocaleString()}원</div>
    `;

    card.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      if (modalTitle) {
        modalTitle.textContent = product.name;
      }
      if (modalDesc) {
        modalDesc.textContent = product.desc;
      }
      overlay?.removeAttribute("hidden");
    });
    grid.append(card);
  });
  section?.append(grid);

  // 모달 닫기 공통 함수
  const closeModal = () => {
    overlay?.setAttribute("hidden", "true");
    document.body.style.overflow = "";
  };

  // 버튼 여닫기
  closeBtn?.addEventListener("click", closeModal);
  function openModal(event) {
    if (event.target === overlay) {
      closeModal();
    }
  }
  overlay?.addEventListener("click", openModal);

  // 모달 열기
  const openBtn = document.querySelector("#open-modal");
  openBtn?.addEventListener("click", () => {
    overlay?.removeAttribute("hidden");
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay?.hasAttribute("hidden") && event.key === "Escape") {
      closeModal();
    }
  });
}

createModal();
