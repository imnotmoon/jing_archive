import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';

export const RouterSwitch = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </Router>
)
