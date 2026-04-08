// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 employees 배열을 이용하여 정렬/필터/페이지네이션 테이블을 구현하시오. (Vanilla TS)
//
// 요구사항:
//   1. 컬럼 헤더 클릭 시 오름/내림차순 정렬된다
//   2. 검색창 입력 시 이름/팀/직급 통합 검색
//   3. 페이지당 5개씩, 하단에 페이지네이션
//   4. 필터 변경 시 페이지 1로 초기화
//   5. 정렬 방향 아이콘(↑↓) 헤더 표시
//
// 주어진 데이터:
interface Employee { id: number; name: string; team: string; role: string; salary: number; startYear: number; }
const employees: Employee[] = [
  { id: 1,  name: '김철수', team: '프론트엔드', role: '시니어',   salary: 6500, startYear: 2019 },
  { id: 2,  name: '이영희', team: '백엔드',    role: '시니어',   salary: 7000, startYear: 2018 },
  { id: 3,  name: '박민준', team: '프론트엔드', role: '주니어',   salary: 4200, startYear: 2023 },
  { id: 4,  name: '최수진', team: '디자인',    role: '미드레벨', salary: 5500, startYear: 2021 },
  { id: 5,  name: '정대호', team: '백엔드',    role: '주니어',   salary: 4000, startYear: 2024 },
  { id: 6,  name: '강지은', team: 'DevOps',   role: '시니어',   salary: 7500, startYear: 2017 },
  { id: 7,  name: '윤서준', team: '프론트엔드', role: '미드레벨', salary: 5800, startYear: 2020 },
  { id: 8,  name: '임하나', team: 'QA',       role: '미드레벨', salary: 5000, startYear: 2022 },
  { id: 9,  name: '한도현', team: '백엔드',    role: '시니어',   salary: 6800, startYear: 2019 },
  { id: 10, name: '오지수', team: '디자인',    role: '주니어',   salary: 3800, startYear: 2024 },
  { id: 11, name: '노태양', team: 'DevOps',   role: '미드레벨', salary: 6000, startYear: 2021 },
  { id: 12, name: '서민지', team: '프론트엔드', role: '시니어',   salary: 7200, startYear: 2018 },
];

// ════════════════════════════════════════════════
// 💡 구현 힌트
// ════════════════════════════════════════════════
//
// ─── 상태 변수 ───────────────────────────────────
//   let sortKey: keyof Employee | null = null
//   let sortDir: 'asc' | 'desc' = 'asc'
//   let filterQ = ''
//   let page = 1
//   const PAGE_SIZE = 5
//
// ─── 파이프라인 함수 ─────────────────────────────
//   const getDisplay = () => {
//     let rows = [...employees]
//     if (filterQ) rows = rows.filter(r => [r.name, r.team, r.role].some(v => v.includes(filterQ)))
//     if (sortKey) rows.sort((a, b) => {
//       const v = a[sortKey!] < b[sortKey!] ? -1 : a[sortKey!] > b[sortKey!] ? 1 : 0
//       return sortDir === 'asc' ? v : -v
//     })
//     return { total: rows.length, rows: rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) }
//   }
//
// ─── 헤더 클릭 처리 ──────────────────────────────
//   document.querySelectorAll('th[data-key]').forEach(th => {
//     th.addEventListener('click', () => {
//       const key = (th as HTMLElement).dataset.key as keyof Employee
//       sortDir = sortKey === key && sortDir === 'asc' ? 'desc' : 'asc'
//       sortKey = key; page = 1; render()
//     })
//   })

// TODO: 위 문제와 힌트를 참고하여 구현하세요
