import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ animation: 'spin 1s linear infinite', width: '4rem', height: '4rem', borderRadius: '50%', borderWidth: '4px', borderStyle: 'solid', borderColor: '#e5e7eb', borderBottomColor: '#b45309', margin: '0 auto 1rem' }}></div>
          <p style={{ color: '#4b5563' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginPage />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;