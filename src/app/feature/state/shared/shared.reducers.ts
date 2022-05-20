import { APP_LOADING_STATE_CHANGE, SharedActions } from './shared.actions';

export const SHARED_STATE_NAME = 'shared';

export interface SharedState {
  isLoading: boolean;
}

export const initialState: SharedState = {
  isLoading: false,
};

export function sharedReducer(
  state: SharedState = initialState,
  action: SharedActions
): SharedState {
    switch (action.type){
        case APP_LOADING_STATE_CHANGE:
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}
