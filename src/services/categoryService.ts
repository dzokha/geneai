// src/services/categoryService.ts
import api from '../config/api';

const categoryService = {
  getAllCategories: async () => {
    const response = await api.get('/categories');
    return response.data;
  },

  getCategoryById: async (id: number) => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },

  createCategory: async (categoryData: { name: string; description: string }) => {
    const response = await api.post('/categories', categoryData);
    return response.data;
  },

  updateCategory: async (id: number, categoryData: { name?: string; description?: string }) => {
    const response = await api.put(`/categories/${id}`, categoryData);
    return response.data;
  },

  deleteCategory: async (id: number) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  },
};

export default categoryService;