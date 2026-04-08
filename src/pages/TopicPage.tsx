import { Suspense, lazy, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTopicById, LEVEL_COLORS } from '../topics/config';
import styles from './TopicPage.module.css';

type Tab = 'react' | 'vanilla';

// ─── React 구현체 Lazy 로딩 ────────────────────────
// 각 주제 구현 완료 후 여기에 추가 (Level 1 → 2 → 3 순서)
const reactImpls: Record<string, React.LazyExoticComponent<() => React.ReactElement>> = {
  // Level 1
  '01-checkbox':        lazy(() => import('../react/01-checkbox/CheckboxDemo')),
  '02-accordion':       lazy(() => import('../react/02-accordion/AccordionDemo')),
  '03-modal':           lazy(() => import('../react/03-modal/ModalDemo')),
  '04-tab':             lazy(() => import('../react/04-tab/TabDemo')),
  '05-toast':           lazy(() => import('../react/05-toast/ToastDemo')),
  // Level 2
  '06-carousel':        lazy(() => import('../react/06-carousel/CarouselDemo')),
  '07-infinite-scroll': lazy(() => import('../react/07-infinite-scroll/InfiniteScrollDemo')),
  '08-drag-drop':       lazy(() => import('../react/08-drag-drop/DragDropDemo')),
  '09-form-validation': lazy(() => import('../react/09-form-validation/FormDemo')),
  '10-autocomplete':    lazy(() => import('../react/10-autocomplete/AutocompleteDemo')),
  // Level 3
  '11-virtual-scroll':  lazy(() => import('../react/11-virtual-scroll/VirtualScrollDemo')),
  '12-lazy-image':      lazy(() => import('../react/12-lazy-image/LazyImageDemo')),
  '13-date-picker':     lazy(() => import('../react/13-date-picker/DatePickerDemo')),
  '14-sortable-table':  lazy(() => import('../react/14-sortable-table/SortableTableDemo')),
  '15-progress-stepper':lazy(() => import('../react/15-progress-stepper/StepperDemo')),
};

function LoadingFallback() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
      <span>로딩 중...</span>
    </div>
  );
}

export default function TopicPage() {
  const { id = '' } = useParams<{ id: string }>();
  const topic = getTopicById(id);
  const [activeTab, setActiveTab] = useState<Tab>('react');

  if (!topic) {
    return (
      <div className={styles.notFound}>
        <h2>주제를 찾을 수 없습니다</h2>
        <Link to="/" className={styles.backLink}>← 홈으로</Link>
      </div>
    );
  }

  const ReactImpl = reactImpls[id];
  const vanillaUrl = `/vanilla/${id}/index.html`;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link to="/">홈</Link>
        <span>/</span>
        <span>{topic.title}</span>
      </nav>

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span
            className={styles.levelBadge}
            style={{
              color: LEVEL_COLORS[topic.level],
              borderColor: `${LEVEL_COLORS[topic.level]}40`,
              background: `${LEVEL_COLORS[topic.level]}12`,
            }}
          >
            Level {topic.level}
          </span>
          <span className={styles.topicNum}>
            {String(topic.number).padStart(2, '0')}
          </span>
          <h1 className={styles.title}>{topic.title}</h1>
        </div>
        <div className={styles.tags}>
          {topic.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </header>

      <p className={styles.desc}>{topic.description}</p>

      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${activeTab === 'react' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('react')}
          id="tab-react"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
          </svg>
          React
          <span className={styles.tabBadge}>TSX</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'vanilla' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('vanilla')}
          id="tab-vanilla"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 3h16a1 1 0 011 1v3H3V4a1 1 0 011-1z"/>
            <path d="M3 7h18v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/>
            <path d="M9 12l-3 3 3 3M15 12l3 3-3 3"/>
          </svg>
          Vanilla
          <span className={styles.tabBadge}>HTML/TS</span>
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'react' ? (
          <div className={styles.reactPanel}>
            {ReactImpl ? (
              <Suspense fallback={<LoadingFallback />}>
                <ReactImpl />
              </Suspense>
            ) : (
              <div className={styles.comingSoon}>
                <span>⚛️</span>
                <p>React 구현 준비 중입니다</p>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.vanillaPanel}>
            <div className={styles.iframeHeader}>
              <span className={styles.iframeUrl}>{vanillaUrl}</span>
              <a href={vanillaUrl} target="_blank" rel="noreferrer" className={styles.iframeOpen}>
                새 탭에서 열기
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
            <iframe src={vanillaUrl} className={styles.iframe} title={`${topic.title} Vanilla 구현`} />
          </div>
        )}
      </div>
    </div>
  );
}
