///userThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_BE;


export const fetchUserById = createAsyncThunk('user/fetchById', async (id: number) => {
  const response = await axios.get(`${API_URL}/api/v1/user/${id}`);
  return response.data;
});

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ id, formData }: { id: number; formData: FormData }) => {
    const response = await axios.put(`${API_URL}/api/v1/user/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }
);
