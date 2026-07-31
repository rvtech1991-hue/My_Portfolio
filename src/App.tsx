import './App.css';
import ClassicPortfolio from './components/ClassicPortfolio';
import ModernPortfolio from './components/ModernPortfolio';
import FloatingToggle from './components/FloatingToggle';
import { AppSettingsProvider, useAppSettings } from './context/AppSettingsContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppContent() {
  const { version, theme } = useAppSettings();

  return (
    <div className="App">
      <header className="bg-light">
        {version === 'classic' ? <ClassicPortfolio /> : <ModernPortfolio />}
      </header>

      <FloatingToggle />
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
    </div>
  );
}

function App() {
  return (
    <AppSettingsProvider>
      <AppContent />
    </AppSettingsProvider>
  );
}

export default App;
