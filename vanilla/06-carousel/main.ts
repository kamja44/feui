// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 slides 배열을 이용하여 캐러셀을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 이전/다음 버튼으로 슬라이드를 넘긴다
//   2. dot 인디케이터를 클릭하면 해당 슬라이드로 이동한다
//   3. 3초마다 자동으로 다음 슬라이드로 이동한다
//   4. 마우스 오버 시 자동 슬라이드 정지, 마우스 아웃 시 재시작
//   5. 마우스/터치 드래그로 슬라이드 이동 (Pointer Events 사용)
//
// 주어진 데이터:
const slides = [
  { id: 1, title: 'React 19 출시',  desc: 'Actions, 새로운 훅', color: '#1a1a2e', accent: '#58a6ff' },
  { id: 2, title: 'TypeScript 5.5', desc: '추론 성능 향상',     color: '#16213e', accent: '#bc8cff' },
  { id: 3, title: 'Vite 8 릴리즈',  desc: '더 빠른 HMR',       color: '#1a2a1a', accent: '#3fb950' },
  { id: 4, title: 'Next.js 15',     desc: 'PPR(부분 사전렌더)', color: '#2a1a1a', accent: '#f85149' },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 슬라이드 생성 & 이동 ────────────────────────
//   const track   = document.querySelector<HTMLElement>('.carousel-track')!
//   let index = 0
//   slides.forEach(s => {
//     const div = document.createElement('div')
//     div.className = 'slide'
//     div.style.background = s.color
//     div.innerHTML = `<h2 style="color:${s.accent}">${s.title}</h2><p>${s.desc}</p>`
//     track.appendChild(div)
//   })
//   const move = () => track.style.transform = `translateX(-${index * 100}%)`
//
// ─── 자동 슬라이드 ───────────────────────────────
//   let timer: ReturnType<typeof setInterval>
//   const start = () => { timer = setInterval(() => { index = (index + 1) % slides.length; move(); updateDots() }, 3000) }
//   const stop  = () => clearInterval(timer)
//   document.querySelector('.carousel')!.addEventListener('mouseenter', stop)
//   document.querySelector('.carousel')!.addEventListener('mouseleave', start)
//
// ─── Pointer Events (드래그) ─────────────────────
//   let startX = 0
//   track.addEventListener('pointerdown', e => { startX = e.clientX; track.setPointerCapture(e.pointerId) })
//   track.addEventListener('pointerup',   e => {
//     const delta = e.clientX - startX
//     if (delta < -50) index = (index + 1) % slides.length
//     if (delta >  50) index = (index - 1 + slides.length) % slides.length
//     move(); updateDots()
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
