import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import CategoriesPage from './pages/categories/CategoriesPage';
import ConfigurationPage from './pages/configuration/ConfigurationPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DishesPage from './pages/dishes/DishesPage';
import LoginPage from './pages/login/LoginPage';
import Sidebar from './shared/components/Sidebar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="categories" element={<CategoriesPage />} /> 
        <Route path="dishes" element={<DishesPage />} />
        <Route path="configuration" element={<ConfigurationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
