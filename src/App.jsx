import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { HomePage, ContactPage } from './pages';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/contact' element={<ContactPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}
