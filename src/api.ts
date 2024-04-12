import axios from 'axios';
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});
export default instance



//types.ts file 

export type APIResponse<T> = {
    success: boolean
    content: T;
    status?: number;
  }