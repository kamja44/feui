// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 tasks 배열을 이용하여 드래그 앤 드롭 할 일 목록을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 할 일 목록을 드래그하여 순서를 변경할 수 있다
//   2. 드래그 중인 항목은 반투명(opacity: 0.4)으로 표시된다
//   3. 드롭 위치에 파란 구분선이 표시된다
//   4. HTML5 DnD API로 먼저 구현하고, 이후 Pointer Events로도 도전한다
//
// 주어진 데이터:
const tasks = [
  { id: 1, title: 'Checkbox 구현',         priority: 'high'   },
  { id: 2, title: 'Accordion 애니메이션',   priority: 'high'   },
  { id: 3, title: 'Modal 포커스 트랩',      priority: 'medium' },
  { id: 4, title: 'Tab 인디케이터',         priority: 'medium' },
  { id: 5, title: 'Toast 커스텀 훅',        priority: 'low'    },
  { id: 6, title: 'Carousel 터치 이벤트',   priority: 'low'    },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── HTML5 DnD 패턴 ───────────────────────────────
//   const list = document.getElementById('dnd-list')!
//   let dragSrc: HTMLLIElement | null = null
//
//   const render = () => {
//     list.innerHTML = ''
//     tasks.forEach(task => {
//       const li = document.createElement('li')
//       li.draggable = true
//       li.dataset.id = String(task.id)
//       li.innerHTML = `<span class="priority ${task.priority}"></span> ${task.title}`
//       li.addEventListener('dragstart', () => { dragSrc = li; li.classList.add('dragging') })
//       li.addEventListener('dragend',   () => li.classList.remove('dragging'))
//       li.addEventListener('dragover',  e => { e.preventDefault() })
//       li.addEventListener('drop',      () => {
//         if (!dragSrc || dragSrc === li) return
//         const fromIdx = tasks.findIndex(t => t.id === +dragSrc!.dataset.id!)
//         const toIdx   = tasks.findIndex(t => t.id === +li.dataset.id!)
//         const [item]  = tasks.splice(fromIdx, 1)
//         tasks.splice(toIdx, 0, item)
//         render()
//       })
//       list.appendChild(li)
//     })
//   }
//   render()

// TODO: 위 문제와 힌트를 참고하여 구현하세요
