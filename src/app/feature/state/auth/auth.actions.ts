import { Action } from "@ngrx/store";
import { AuthError, AuthUser, LoginRequest } from "src/app/shared/models/auth";

export const MEMBER_LOGIN_START = 'MEMBER_LOGIN_START';
export const MEMBER_LOGIN_SUCCESS = 'MEMBER_LOGIN_SUCCESS';
export const MEMBER_LOGIN_FAILED = 'MEMBER_LOGIN_FAILED';

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

export type AuthActions = 
      MemberLoginStart 
    | MemberLoginSuccess
    | MemberLoginFailed;