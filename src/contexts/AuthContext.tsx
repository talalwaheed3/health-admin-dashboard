import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  // isAuthenticated: boolean;
  user: { username: string; role: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  const login = (username: string, password: string): boolean => {
    // Demo login - accepts admin/admin
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      setUser({ username: 'admin', role: 'Administrator' });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setUser(null);
  };

  return (
    // <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function checkAuthentication(){
  return localStorage.getItem('isAuthenticated') === 'true'
}
