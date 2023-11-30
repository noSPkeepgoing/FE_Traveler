import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.gamsung.xyz',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiIzIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImlzcyI6ImZjX21pbmkiLCJpYXQiOjE3MDEzMjAwOTUsImV4cCI6MTcwMTM1NjA5NX0.Gtrp0rYzyhxmjKOb6IfcL1Y-YJxaxmBn1HDZ36TY3Pvki4DJfXe7HmvSu2q-Dz3zMlHxwzF4re8XHztHALAYGQ',
  },
});

// interceptor 코드
