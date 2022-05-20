import { authReducer, AuthState, AUTH_STATE_NAME } from "../feature/state/auth/auth.reducer";
import { sharedReducer, SharedState, SHARED_STATE_NAME } from "../feature/state/shared/shared.reducers";

export interface AppState{
    [AUTH_STATE_NAME]: AuthState;
    [SHARED_STATE_NAME]: SharedState;
}

export const appReducers = {
    [AUTH_STATE_NAME]: authReducer,
    [SHARED_STATE_NAME]: sharedReducer
}