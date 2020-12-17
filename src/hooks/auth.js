import React, {
  createContext, useCallback, useState, useContext,
} from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@CPE:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/user/authenticate', {
      email,
      password,
    });

    localStorage.setItem('@CPE:user', JSON.stringify(response.data));

    setData({ ...response.data });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CPE:user');
    console.log('123456');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
