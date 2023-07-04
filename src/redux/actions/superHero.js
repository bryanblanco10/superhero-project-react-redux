import { createAction } from "@reduxjs/toolkit";
import { apiCall } from "../api";
export const checkingLoading = createAction("IS_LOADING")
export const errorSearching = createAction("ERROR_SEARCHING")
export const resultSearching = createAction("RESULT_SEARCHING")
export const recordSearching = createAction("RECORD_SEARCHING")
export const searchHero = (searchText) => async (dispatch) => {
  try {
    dispatch(checkingLoading({ isLoading: true }));

    const { data } = await apiCall.get(`/search/${searchText}`);
    dispatch(resultSearching({data: data?.results}));
  } catch (error) {
    dispatch(errorSearching({error}));
  } finally {
    dispatch(checkingLoading({ isLoading: false }));
  }
}

export const searchBio = (id) => async (dispatch) => {
  try {
    dispatch(checkingLoading({ isLoading: true }));
    const { data } = await apiCall.get(`/${id}`);
    dispatch(recordSearching({ record: data}));
  } catch (error) {
    dispatch(errorSearching({error}));
  } finally {
    dispatch(checkingLoading({ isLoading: false }));
  }
}