// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 people 배열을 이용하여 체크박스 리스트를 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 각 사람의 이름과 직책을 체크박스 레이블로 표시한다
//   2. "전체 선택" 체크박스가 맨 위에 있어야 한다
//   3. 일부만 선택되면 "전체 선택"은 indeterminate 상태가 된다
//   4. 선택된 사람 수를 실시간으로 표시한다 (예: "2 / 4명 선택됨")
//   5. Toggle Switch도 추가로 구현한다 (다크모드 ON/OFF 예시)
//
// 주어진 데이터:
const people = [
  { id: 1, name: '김철수', role: 'Frontend' },
  { id: 2, name: '이영희', role: 'Backend'  },
  { id: 3, name: '박민준', role: 'Designer' },
  { id: 4, name: '최수진', role: 'DevOps'   },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 체크박스 생성 패턴 ──────────────────────────
//   people.forEach(p => {
//     const label = document.createElement('label')
//     const cb    = document.createElement('input')
//     cb.type     = 'checkbox'
//     cb.id       = `person-${p.id}`
//     label.htmlFor = cb.id
//     label.textContent = `${p.name} (${p.role})`
//     label.prepend(cb)
//     container.appendChild(label)
//   })
//
// ─── Indeterminate 설정 ──────────────────────────
//   // JS로만 설정 가능 (HTML 속성 없음)
//   selectAllCb.indeterminate = true
//   // 상태 업데이트 함수
//   const updateSelectAll = () => {
//     const checked = itemCbs.filter(cb => cb.checked).length
//     selectAllCb.checked       = checked === itemCbs.length
//     selectAllCb.indeterminate = checked > 0 && checked < itemCbs.length
//     countEl.textContent       = `${checked} / ${itemCbs.length}명 선택됨`
//   }
//
// ─── Toggle Switch ────────────────────────────────
//   - input[type=checkbox] hidden → label이 트랙 역할
//   - input:checked + .thumb → translateX()

// TODO: 위 문제와 힌트를 참고하여 구현하세요
