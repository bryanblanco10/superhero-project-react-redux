import { createSelector } from "@reduxjs/toolkit";

export const isAuthSel = state => state.authReducer.isAuth;
export const isCheckingAuthSel = state => state.authReducer.isCheckingAuth;
export const isSendingAuthFormSel = state => state.authReducer.isSendingAuthForm;
export const isSuccessLoggedSel = state => state.authReducer.isSuccessLogged;
export const isLoadingSel = state => state.superHeroReducer.isLoading;
export const recordsSel = state => state.superHeroReducer.records;
export const errorSel = state => state.superHeroReducer.error;
export const recordSel = state => state.superHeroReducer.record;
export const biographySel = createSelector(recordSel, (recordSel) => ({
  bio: recordSel?.biography, 
  photo: recordSel?.image, 
  work: recordSel?.work, 
  connections: recordSel?.connections,
}));

//createSlice, crear reducer y actions