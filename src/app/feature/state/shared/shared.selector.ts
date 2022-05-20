import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState, SHARED_STATE_NAME } from "./shared.reducers";

const sharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const isApplicationBusy = createSelector(sharedState, (state: SharedState) => {
    return state.isLoading;
});