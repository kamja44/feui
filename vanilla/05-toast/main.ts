// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 actions 배열을 이용하여 Toast 알림 시스템을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 각 버튼 클릭 시 해당 타입의 토스트가 우측 하단에 나타난다
//   2. 토스트는 3초 후 자동으로 사라진다
//   3. 토스트 클릭 시 즉시 제거된다
//   4. 여러 토스트가 동시에 쌓일 수 있다
//   5. 나타날 때 슬라이드 인, 사라질 때 슬라이드 아웃 애니메이션
//
// 주어진 데이터:
const actions = [
  { type: 'success', label: '✅ 저장 완료', message: '파일이 성공적으로 저장되었습니다.' },
  { type: 'error',   label: '❌ 오류 발생', message: '서버와의 연결이 끊어졌습니다.' },
  { type: 'warning', label: '⚠️ 주의',      message: '저장하지 않은 변경 사항이 있습니다.' },
  { type: 'info',    label: 'ℹ️ 업데이트',  message: '새로운 버전(v2.1.0)이 출시되었습니다.' },
] as const;

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 버튼 동적 생성 ──────────────────────────────
//   const btnArea = document.querySelector('.section')!
//   actions.forEach(action => {
//     const btn = document.createElement('button')
//     btn.textContent = action.label
//     btn.addEventListener('click', () => showToast(action.message, action.type))
//     btnArea.appendChild(btn)
//   })
//
// ─── showToast 함수 ───────────────────────────────
//   const showToast = (message: string, type: string, duration = 3000) => {
//     const container = document.getElementById('toast-container')!
//     const toast = document.createElement('div')
//     toast.className = `toast toast-${type}`
//     toast.textContent = message
//     container.appendChild(toast)
//     requestAnimationFrame(() => toast.classList.add('show'))  // 애니메이션 트리거
//
//     const remove = () => {
//       toast.classList.remove('show'); toast.classList.add('hide')
//       toast.addEventListener('transitionend', () => toast.remove(), { once: true })
//     }
//     const timer = setTimeout(remove, duration)
//     toast.addEventListener('click', () => { clearTimeout(timer); remove() })
//   }

// TODO: 위 문제와 힌트를 참고하여 구현하세요
