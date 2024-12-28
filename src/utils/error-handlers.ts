import { FirebaseError } from 'firebase/app';
import { AUTH_ERROR_CODES } from '@/config/constants';

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case AUTH_ERROR_CODES.INVALID_API_KEY:
        return 'Authentication service configuration error. Please contact support.';
      case AUTH_ERROR_CODES.INVALID_EMAIL:
        return 'Please enter a valid email address.';
      case AUTH_ERROR_CODES.USER_NOT_FOUND:
      case AUTH_ERROR_CODES.WRONG_PASSWORD:
        return 'Invalid email or password.';
      default:
        return 'An error occurred during authentication.';
    }
  }
  return 'An unexpected error occurred.';
}