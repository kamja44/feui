import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}
