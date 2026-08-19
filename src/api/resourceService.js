// src/api/resourceService.js
import api from './axios';

export const getResources = (params = {}) =>
  api.get('/resources', { params }).then(r => r.data);

// params example:
// { type: 'lesson', grade_level_id: 1, subject_id: 3, academic_year_id: 1, search: 'html' }

export const uploadResource = (formData) =>
  api.post('/resources', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(r => r.data);

export const downloadResource = (id) =>
  api.get(`/resources/${id}/download`, { responseType: 'blob' });