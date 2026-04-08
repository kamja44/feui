import { Link } from 'react-router-dom';
import { topics, LEVEL_LABELS, LEVEL_COLORS, type Level } from '../topics/config';
import styles from './Home.module.css';

const levels: Level[] = [1, 2, 3];
const LEVEL_EMOJI: Record<Level, string> = { 1: '🔴', 2: '🟡', 3: '🟢' };

export default function Home() {
  const implementedCount = topics.filter((t) => t.implemented).length;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroBadge}>Frontend Study</div>
        <h1 className={styles.heroTitle}>
          15가지 UI 구현
          <span className={styles.heroAccent}> 마스터하기</span>
        </h1>
        <p className={styles.heroDesc}>
          각 주제를 <strong>React + TypeScript</strong>와 <strong>Vanilla HTML/CSS/TS</strong> 두 가지 방식으로 구현하며
          브라우저 원리와 컴포넌트 추상화를 동시에 익힙니다.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{topics.length}</span>
            <span className={styles.statLabel}>총 주제</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{implementedCount}</span>
            <span className={styles.statLabel}>완료</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>×2</span>
            <span className={styles.statLabel}>구현 방식</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className={styles.progressWrap}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              style={{ width: `${(implementedCount / topics.length) * 100}%` }}
            />
          </div>
          <span className={styles.progressLabel}>
            {implementedCount}/{topics.length} 완료
          </span>
        </div>
      </section>

      {/* Topic Groups */}
      {levels.map((level) => {
        const levelTopics = topics.filter((t) => t.level === level);
        return (
          <section key={level} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>{LEVEL_EMOJI[level]}</span>
              <h2
                className={styles.sectionTitle}
                style={{ color: LEVEL_COLORS[level] }}
              >
                {LEVEL_LABELS[level]}
              </h2>
              <span className={styles.sectionCount}>
                {levelTopics.filter((t) => t.implemented).length}/{levelTopics.length}
              </span>
            </div>

            <div className={styles.grid}>
              {levelTopics.map((topic) => (
                <article
                  key={topic.id}
                  className={`${styles.card} ${!topic.implemented ? styles.cardLocked : ''}`}
                  style={{ '--level-color': LEVEL_COLORS[topic.level] } as React.CSSProperties}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardNum}>
                      {String(topic.number).padStart(2, '0')}
                    </span>
                    {topic.implemented ? (
                      <span className={styles.cardStatus} data-done>✓ 완료</span>
                    ) : (
                      <span className={styles.cardStatus}>준비 중</span>
                    )}
                  </div>

                  <h3 className={styles.cardTitle}>{topic.title}</h3>
                  <p className={styles.cardDesc}>{topic.description}</p>

                  <div className={styles.cardTags}>
                    {topic.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  {topic.implemented ? (
                    <Link to={`/topic/${topic.id}`} className={styles.cardBtn}>
                      구현 보기
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  ) : (
                    <span className={styles.cardBtnDisabled}>
                      Coming soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
