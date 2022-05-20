import { Action } from "@ngrx/store";
import { AuthError, AuthUser, LoginRequest } from "src/app/shared/models/auth";

export const MEMBER_LOGIN_START = 'MEMBER_LOGIN_START';
export const MEMBER_LOGIN_SUCCESS = 'MEMBER_LOGIN_SUCCESS';
export const MEMBER_LOGIN_FAILED = 'MEMBER_LOGIN_FAILED';
export const PERFORMING_AUTO_LOGIN = 'PERFORMING_AUTO_LOGIN';

export class MemberLoginStart implements Action{
    public readonly type = MEMBER_LOGIN_START;
    constructor(public payload: LoginRequest){}
}

export class MemberLoginSuccess implements Action{
    public readonly type = MEMBER_LOGIN_SUCCESS;
    constructor(public payload?:AuthUser){}
}

export class MemberLoginFailed implements Action{
    public readonly type = MEMBER_LOGIN_FAILED;
    constructor(public payload: AuthError){}
}

export class PerformingAutLogin implements Action {
    public readonly type = PERFORMING_AUTO_LOGIN;
    constructor(){}
}

export type AuthActions = 
      MemberLoginStart 
    | MemberLoginSuccess
    | MemberLoginFailed
    | PerformingAutLogin;