import { createContext, useContext, useState, useCallback } from 'react';
import { loginAdmin as loginAdminApi, logoutAdmin as logoutAdminApi } from '../api/authApi';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(
    () => !!sessionStorage.getItem('admin_token')
  );

  const login = useCallback(async (password) => {
    const token = await loginAdminApi(password);
    sessionStorage.setItem('admin_token', token);
    setIsAdmin(true);
  }, []);

  const logout = useCallback(() => {
    logoutAdminApi();
    sessionStorage.removeItem('admin_token');
    setIsAdmin(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
