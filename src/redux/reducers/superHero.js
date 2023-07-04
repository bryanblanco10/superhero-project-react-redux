import { createReducer } from "@reduxjs/toolkit";
import {
  checkingLoading,
  resultSearching,
  errorSearching,
  recordSearching,
} from "../actions/superHero"
const initialState = {
  isLoading: false,
  records: [],
  error: undefined,
  record: {},
}
export const superHeroReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkingLoading.toString(), (state, action) => {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    })
    .addCase(resultSearching.toString(), (state, action) => {
      return {
        ...state,
        records: action.payload.data,
      }
    })
    .addCase(errorSearching.toString(), (state, action) => {
      return {
        ...state,
        records: [],
        isLoading: false,
        error: action.payload.error,
      }
    })
    .addCase(recordSearching.toString(), (state, action) => {
      return {
        ...state,
        record: action.payload?.record,
      }
    })
})