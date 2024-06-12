import { UPDATE_SEARCH_PARAMS } from "./constant";

export const updateSearchParams = payload => ({
    type: UPDATE_SEARCH_PARAMS,
    payload: payload
})