import React, { createContext, useContext, useEffect, useState } from 'react';

export type Version = 'classic' | 'modern';
export type Theme = 'light' | 'dark';

interface AppSettings {
  version: Version;
  theme: Theme;
  setVersion: (version: Version) => void;
  setTheme: (theme: Theme) => void;
  toggleVersion: () => void;
  toggleTheme: () => void;
}

const VERSION_KEY = 'portfolioVersion';
const THEME_KEY = 'portfolioTheme';

const AppSettingsContext = createContext<AppSettings | undefined>(undefined);

function getInitialVersion(): Version {
  const stored = localStorage.getItem(VERSION_KEY);
  return stored === 'modern' ? 'modern' : 'classic';
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [version, setVersion] = useState<Version>(getInitialVersion);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-version', version);
    localStorage.setItem(VERSION_KEY, version);
  }, [version]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleVersion = () => setVersion((v) => (v === 'classic' ? 'modern' : 'classic'));
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <AppSettingsContext.Provider value={{ version, theme, setVersion, setTheme, toggleVersion, toggleTheme }}>
      {children}
    </AppSettingsContext.Provider>
  );
};

export function useAppSettings(): AppSettings {
  const ctx = useContext(AppSettingsContext);
  if (!ctx) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return ctx;
}
