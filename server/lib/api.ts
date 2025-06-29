import axios from 'axios';

export const api = axios.create({
  baseURL: useRuntimeConfig().apiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// IMPORTANT: We do NOT add a request interceptor here to attach the auth token.
// Doing so on a shared instance in a server environment can lead to one user's
// token leaking into another user's request. Instead, we will add the
// Authorization header manually in each service function that requires it.