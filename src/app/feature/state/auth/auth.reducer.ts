import { AuthError, AuthUser } from 'src/app/shared/models/auth';
import * as authActions from './auth.actions';

export interface AuthState {
  authUser: AuthUser | null;
  isAuthenticated: boolean;
  authError: AuthError
}

export const AUTH_STATE_NAME = 'auth';

export const initialState: AuthState = {
  authUser: null,
  isAuthenticated: null,
  authError: null
};

export function authReducer(
  state: AuthState = initialState,
  action: authActions.AuthActions
): AuthState {
  switch (action.type) {
    case authActions.MEMBER_LOGIN_START:
      return {
        ...state,
        isAuthenticated: true,
      };
    case authActions.MEMBER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authError: null,
        authUser: action.payload
      }
    case authActions.MEMBER_LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        authUser: null,
        authError: action.payload
      }
    default:
      return state;
  }
}
