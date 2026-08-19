// src/api/authService.js
import api from './axios';

export const login = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });
  localStorage.setItem('auth_token', data.token);
  return data.user;
};

export const logout = async () => {
  await api.post('/auth/logout');
  localStorage.removeItem('auth_token');
};

export const getMe = () => api.get('/auth/me').then(r => r.data);
