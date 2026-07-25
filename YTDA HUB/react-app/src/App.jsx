import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Login';

function App() {
  return (
    <AuthProvider>
      <main className="app-wrapper">
        <Login />
      </main>
    </AuthProvider>
  );
}

export default App;
