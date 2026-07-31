import React from 'react';
import { Layout, Sparkles, Sun, Moon } from 'lucide-react';
import styles from './FloatingToggle.module.css';
import { useAppSettings } from '../context/AppSettingsContext';

const FloatingToggle = () => {
  const { version, theme, setVersion, toggleTheme } = useAppSettings();

  return (
    <div className={styles.wrap} role="group" aria-label="Site appearance controls">
      <div className={styles.versionSwitch}>
        <button
          type="button"
          className={`${styles.versionOption} ${version === 'classic' ? styles.versionOptionActive : ''}`}
          onClick={() => setVersion('classic')}
          aria-pressed={version === 'classic'}
        >
          <Layout size={14} />
          <span className={styles.versionLabel}>Classic</span>
        </button>
        <button
          type="button"
          className={`${styles.versionOption} ${version === 'modern' ? styles.versionOptionActive : ''}`}
          onClick={() => setVersion('modern')}
          aria-pressed={version === 'modern'}
        >
          <Sparkles size={14} />
          <span className={styles.versionLabel}>Modern</span>
        </button>
      </div>
      <button
        type="button"
        className={styles.themeButton}
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  );
};

export default FloatingToggle;
