export const API_URL = 'https://127.0.0.1:8000/api'; 

// Static deployment configuration
export const IS_STATIC_DEPLOYMENT = process.env.NODE_ENV === 'production' || process.env.VITE_STATIC_DEPLOYMENT === 'true';
export const ENABLE_ADMIN = !IS_STATIC_DEPLOYMENT;