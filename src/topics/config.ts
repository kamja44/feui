export type Level = 1 | 2 | 3;

export interface Topic {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  description: string;
  level: Level;
  tags: string[];
  implemented: boolean;
}

export const LEVEL_LABELS: Record<Level, string> = {
  1: 'Level 1 — UI 기초',
  2: 'Level 2 — 인터랙션',
  3: 'Level 3 — 성능 & 고급',
};

export const LEVEL_COLORS: Record<Level, string> = {
  1: '#f85149',
  2: '#e3b341',
  3: '#3fb950',
};

export const topics: Topic[] = [
  // ─── Level 1 ────────────────────────────────────
  { id: '01-checkbox',       number: 1,  title: 'Checkbox / Toggle',     titleEn: 'Checkbox',      description: '상태 반영, 제어 컴포넌트, 커스텀 스타일링, 인디터미닛 상태',   level: 1, tags: ['state', 'controlled', 'CSS', 'indeterminate'], implemented: true },
  { id: '02-accordion',      number: 2,  title: 'Accordion',             titleEn: 'Accordion',     description: '조건부 렌더링, 높이 애니메이션, 단일/다중 오픈 모드',          level: 1, tags: ['animation', 'state', 'CSS'],                    implemented: true },
  { id: '03-modal',          number: 3,  title: 'Modal / Dialog',        titleEn: 'Modal',         description: '포커스 트랩, 오버레이, React Portal, ESC 닫기',               level: 1, tags: ['accessibility', 'portal', 'focus-trap'],         implemented: true },
  { id: '04-tab',            number: 4,  title: 'Tab',                   titleEn: 'Tab',           description: '활성 탭 상태, aria 접근성, 언더라인/카드 변형',                level: 1, tags: ['state', 'accessibility', 'aria'],                implemented: true },
  { id: '05-toast',          number: 5,  title: 'Toast / Notification',  titleEn: 'Toast',         description: '자동 소멸 타이머, 큐 관리, 슬라이드 애니메이션',               level: 1, tags: ['timer', 'queue', 'animation'],                   implemented: true },
  // ─── Level 2 ────────────────────────────────────
  { id: '06-carousel',       number: 6,  title: 'Carousel / Slider',     titleEn: 'Carousel',      description: '터치/드래그 이벤트, 자동 슬라이드, 인디케이터',                level: 2, tags: ['touch', 'drag', 'animation'],                   implemented: true },
  { id: '07-infinite-scroll',number: 7,  title: 'Infinite Scroll',       titleEn: 'Infinite Scroll',description: 'IntersectionObserver, 페이지네이션, 로딩 스켈레톤',            level: 2, tags: ['observer', 'pagination', 'performance'],         implemented: true },
  { id: '08-drag-drop',      number: 8,  title: 'Drag & Drop',           titleEn: 'DnD',           description: 'Pointer Events / HTML5 DnD API, 리스트 정렬',                level: 2, tags: ['events', 'drag', 'pointer'],                    implemented: true },
  { id: '09-form-validation',number: 9,  title: 'Form Validation',       titleEn: 'Form',          description: '실시간 검증, 에러 메시지, Submit 처리',                        level: 2, tags: ['form', 'validation', 'UX'],                     implemented: true },
  { id: '10-autocomplete',   number: 10, title: 'Autocomplete / Search', titleEn: 'Autocomplete',  description: 'Debounce, 키보드 내비게이션, 결과 하이라이트',                 level: 2, tags: ['debounce', 'search', 'keyboard'],                implemented: true },
  // ─── Level 3 ────────────────────────────────────
  { id: '11-virtual-scroll', number: 11, title: 'Virtual Scroll',        titleEn: 'Virtual Scroll',description: '윈도잉 기법, 대용량 리스트 렌더링 최적화',                      level: 3, tags: ['performance', 'windowing', 'optimization'],      implemented: true },
  { id: '12-lazy-image',     number: 12, title: 'Lazy Image Loading',    titleEn: 'Lazy Image',    description: 'IntersectionObserver, Skeleton UI, Blur-up 효과',            level: 3, tags: ['performance', 'observer', 'UX'],                 implemented: true },
  { id: '13-date-picker',    number: 13, title: 'Date Picker',           titleEn: 'DatePicker',    description: '캘린더 로직, 날짜 포매팅, 범위 선택',                          level: 3, tags: ['calendar', 'date', 'logic'],                    implemented: true },
  { id: '14-sortable-table', number: 14, title: 'Sortable Table',        titleEn: 'Table',         description: '정렬 알고리즘, 필터링, 페이지네이션',                          level: 3, tags: ['sort', 'filter', 'table'],                      implemented: true },
  { id: '15-progress-stepper',number:15, title: 'Progress / Stepper',    titleEn: 'Stepper',       description: '다단계 폼 흐름, 상태 머신, 유효성 검사',                       level: 3, tags: ['form', 'state-machine', 'UX'],                  implemented: true },
];

export const getTopicsByLevel = (level: Level) =>
  topics.filter((t) => t.level === level);

export const getTopicById = (id: string) =>
  topics.find((t) => t.id === id);
