import { NavLink } from 'react-router-dom';
import { topics, LEVEL_LABELS, LEVEL_COLORS, type Level } from '../../topics/config';
import styles from './Sidebar.module.css';

const levels: Level[] = [1, 2, 3];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.homeLink} end>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          홈으로
        </NavLink>

        <div className={styles.divider} />

        {levels.map((level) => (
          <div key={level} className={styles.group}>
            <div className={styles.groupLabel} style={{ color: LEVEL_COLORS[level] }}>
              <span
                className={styles.levelDot}
                style={{ background: LEVEL_COLORS[level] }}
              />
              {LEVEL_LABELS[level]}
            </div>

            <ul className={styles.list}>
              {topics
                .filter((t) => t.level === level)
                .map((topic) => (
                  <li key={topic.id}>
                    <NavLink
                      to={`/topic/${topic.id}`}
                      className={({ isActive }) =>
                        `${styles.topicLink} ${isActive ? styles.active : ''} ${
                          !topic.implemented ? styles.locked : ''
                        }`
                      }
                    >
                      <span className={styles.topicNum}>
                        {String(topic.number).padStart(2, '0')}
                      </span>
                      <span className={styles.topicTitle}>{topic.title}</span>
                      {topic.implemented && (
                        <span className={styles.badge}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
