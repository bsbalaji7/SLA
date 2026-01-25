import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ConstitutionLaw from './components/ConstitutionLaw.jsx';

import { Routes, Route } from "react-router-dom";


function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>

      {/* Dashboard/Login page */}
      <Route
        path="/"
        element={user ? <Dashboard /> : <LoginPage />}
      />

      {/* Constitution page */}
      <Route
        path="/ConstitutionLaw"
        element={<ConstitutionLaw />}
      />

    </Routes>
  );
}


function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
