import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, AUTH_STATE_NAME } from "./auth.reducer";

const authState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isUserLoggedIn = createSelector(authState, (state: AuthState) => {
    return state.isAuthenticated;
});

export const getUserClaim = createSelector(authState, (state: AuthState) => {
    return state.authUser;
});

export const getAuthError = createSelector(authState, (state: AuthState) => {
    return state.authError;
});