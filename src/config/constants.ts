// Firebase error codes
export const AUTH_ERROR_CODES = {
  INVALID_API_KEY: 'auth/api-key-not-valid',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password'
} as const;

// Demo user credentials
export const DEMO_USER = {
  email: 'rcdemo@escolasb.com',
  password: 'demo12345',
  church: 'church1'
} as const;