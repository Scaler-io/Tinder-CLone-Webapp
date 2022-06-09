import { Action } from '@ngrx/store';
import {
  AuthError,
  AuthUser,
  LoginRequest,
  MemberRegistrationRequest,
} from 'src/app/shared/models/auth';

export const MEMBER_LOGIN_START = 'MEMBER_LOGIN_START';
export const MEMBER_LOGIN_SUCCESS = 'MEMBER_LOGIN_SUCCESS';
export const MEMBER_LOGIN_FAILED = 'MEMBER_LOGIN_FAILED';
export const PERFORMING_AUTO_LOGIN = 'PERFORMING_AUTO_LOGIN';

export const MEMBER_REGISTRATION_START = 'MEMBER_REGISTRATION_START';
export const MEMBER_REGISTRATION_SUCCESS = 'MEMBER_REGISTRATION_SUCCESS';
export const MEMBER_REGISTRATION_FAILED = 'MEMBER_REGISTRATION_FAILED';

export class MemberLoginStart implements Action {
  public readonly type = MEMBER_LOGIN_START;
  constructor(public payload: LoginRequest) {}
}

export class MemberLoginSuccess implements Action {
  public readonly type = MEMBER_LOGIN_SUCCESS;
  constructor(public payload?: AuthUser) {}
}

export class MemberLoginFailed implements Action {
  public readonly type = MEMBER_LOGIN_FAILED;
  constructor(public payload: AuthError) {}
}

export class PerformingAutLogin implements Action {
  public readonly type = PERFORMING_AUTO_LOGIN;
  constructor() {}
}

export class MemberRegistrationStart implements Action {
  readonly type = MEMBER_REGISTRATION_START;
  constructor(public payload: MemberRegistrationRequest) {}
}

export class MemberRegistrationSuccess implements Action {
  readonly type = MEMBER_REGISTRATION_SUCCESS;
  constructor(public payload?: AuthUser) {}
}

export class MemberRegistrationFailed implements Action {
  readonly type = MEMBER_REGISTRATION_FAILED;
  constructor(public payload: AuthError) {}
}

export type AuthActions =
  | MemberLoginStart
  | MemberLoginSuccess
  | MemberLoginFailed
  | PerformingAutLogin
  | MemberRegistrationStart
  | MemberRegistrationSuccess
  | MemberRegistrationFailed;
