// Types partagés entre frontend et backend
export interface User {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  // Types pour vos routes API
  export interface CreateUserRequest {
    email: string;
    name: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }