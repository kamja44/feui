// ════════════════════════════════════════════════
// 📋 문제
// ════════════════════════════════════════════════
// 아래 employees 배열을 이용하여 정렬/필터/페이지네이션 테이블을 구현하시오.
//
// 요구사항:
//   1. 컬럼 헤더 클릭 시 해당 컬럼 기준으로 오름/내림차순 정렬된다
//   2. 검색창에 입력하면 이름/팀/직급을 통합 검색하여 실시간 필터링된다
//   3. 페이지당 5개씩 표시되며 페이지네이션이 있다
//   4. 필터 변경 시 페이지가 1로 초기화된다
//   5. 정렬 방향을 헤더의 아이콘(↑↓)으로 표시한다
//   6. 모든 연산은 useMemo로 최적화한다
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
// ✅ 파이프라인 (useMemo로 최적화)
//   1. filter: 검색어로 이름/팀/직급 통합 검색
//   2. sort:   선택된 컬럼 기준 오름/내림차순
//   3. slice:  페이지 범위 슬라이싱
//
// ─── 정렬 상태 ───────────────────────────────────
//   type SortState = { key: keyof Employee; dir: 'asc' | 'desc' } | null
//
// ─── 헤더 클릭 ───────────────────────────────────
//   - 같은 key: 방향 토글 (asc ↔ desc)
//   - 다른 key: 해당 key로 asc부터 시작

export default function SortableTableDemo() {
  return (
    <div>
      {/* TODO: 위 문제와 힌트를 참고하여 구현하세요 */}
    </div>
  );
}
