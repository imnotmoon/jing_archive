import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { Layout } from './components/Layout/Layout';

export const RouterSwitch = () => (
  <Router>
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
      </Routes>
    </Layout>
  </Router>
);
