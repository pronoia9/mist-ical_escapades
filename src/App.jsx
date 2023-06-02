import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Navbar } from './components';
import { HomePage, ContactPage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { light, dark } from './styles/Theme';

export default function App() {
  // THEME RELATED THINGS
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggleTheme = () => { setIsDarkMode((prevMode) => !prevMode); };
  // Listen for system theme change
  useEffect(() => {
    const handleChange = (event) => { setIsDarkMode(event.matches); };
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleChange);
    return () => { darkModeQuery.removeEventListener('change', handleChange); };
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/contact' element={<ContactPage />} />
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
