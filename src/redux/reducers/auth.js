import { createReducer } from "@reduxjs/toolkit";
import {
  checkingAuth,
  completedAuth,
  errorAuth,
  sendingAuthForm,
  completedSendAuthAuthForm,
  errorSendAuthAuthForm,
} from "../actions/auth";

const initialState = {
  error: undefined,
  isCheckingAuth: false,
  isSendingAuthForm: false,
  isSuccessLogged: false,
  isAuth: false,
};
export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkingAuth.toString(), (state, action) => {
      return {
        ...state,
        isCheckingAuth: true,
      };
    })
    .addCase(completedAuth.toString(), (state, action) => {
      return {
        ...state,
        isCheckingAuth: false,
        isAuth: action.payload.isAuth,
      };
    })
    .addCase(errorAuth.toString(), (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        isCheckingAuth: false,
        isAuth: false,
      };
    })
    .addCase(sendingAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isSendingAuthForm: true,
      }
    })
    .addCase(completedSendAuthAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isSendingAuthForm: false,
        isSuccessLogged: true,
      }
    })
    .addCase(errorSendAuthAuthForm.toString(), (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        isSendingAuthForm: false,
        isSuccessLogged: false,
      }
    })
});
