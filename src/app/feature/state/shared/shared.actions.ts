import { Action } from "@ngrx/store";

export const APP_LOADING_STATE_CHANGE = 'APP_LOADING_STATE_CHANGE';


export class AppLoadingStateChange  implements Action {
    public readonly type = APP_LOADING_STATE_CHANGE;
    constructor(public payload?: boolean){}
}

export type SharedActions = 
    AppLoadingStateChange;