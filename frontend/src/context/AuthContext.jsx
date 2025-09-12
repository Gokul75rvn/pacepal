import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setLoading(true);
      
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          setIdToken(token);
          
          // Try to login with the token
          try {
            const response = await authService.login({ idToken: token });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setUser(response.data.user);
            setIsAuthenticated(true);
          } catch (error) {
            console.error('Backend login error:', error);
            // If user doesn't exist in backend, create them
            try {
              const registerResponse = await authService.register({ 
                idToken: token,
                name: firebaseUser.displayName || firebaseUser.email.split('@')[0]
              });
              localStorage.setItem('token', registerResponse.data.token);
              localStorage.setItem('user', JSON.stringify(registerResponse.data.user));
              setUser(registerResponse.data.user);
              setIsAuthenticated(true);
            } catch (registerError) {
              console.error('Registration error:', registerError);
              setUser(null);
              setIsAuthenticated(false);
            }
          }
        } catch (error) {
          console.error('Firebase token error:', error);
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        // User is signed out
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
        setIdToken(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(auth, email, password);
      // The onAuthStateChanged listener will handle the rest
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const loginWithGoogle = async () => {
    try {
      await auth.signInWithPopup(auth, googleProvider);
      // The onAuthStateChanged listener will handle the rest
      return { success: true };
    } catch (error) {
      console.error('Google login error:', error);
      return { success: false, error: error.message };
    }
  };

  const registerWithEmailAndPassword = async (email, password, name) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(auth, email, password);
      // Update profile with display name
      await auth.updateProfile(result.user, {
        displayName: name
      });
      // The onAuthStateChanged listener will handle the rest
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    }
  };

  const mockLogin = async (credentials) => {
    try {
      if (credentials.email === 'test@example.com' && credentials.password === 'password') {
        const mockUser = {
          uid: '1',
          name: 'Test User',
          email: 'test@example.com'
        };
        localStorage.setItem('token', 'mock-token-' + Date.now());
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        setIsAuthenticated(true);
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      console.error('Mock login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      // The onAuthStateChanged listener will handle the rest
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    idToken,
    loginWithEmailAndPassword,
    loginWithGoogle,
    registerWithEmailAndPassword,
    mockLogin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};