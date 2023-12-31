import { createAction } from "@reduxjs/toolkit";
// export const CHECK_LOGIN = "CHECK_LOGIN"; Solo si no usas @reduxjs/toolkit

export const checkingAuth =  createAction("CHECKING_AUTH")
export const completedAuth = createAction("COMPLETED_AUTH")
export const errorAuth = createAction("ERROR_AUTH")
export const sendingAuthForm = createAction("SENDING_AUTH_FORM")
export const completedSendAuthAuthForm = createAction("COMPLETED_SEND_AUTH_FORM")
export const errorSendAuthAuthForm = createAction("ERROR_SEND_AUTH_FORM")

export const checkIfUserIsAuth = () => (dispatch) => {
  try {
    dispatch(checkingAuth());
    const isAuth = localStorage.getItem("@superhero-isAuth")?.length > 0;
    dispatch(completedAuth({isAuth}));
  } catch (error) {
    dispatch(errorAuth({ error }));
  }
}

export const submitLogin = (name, email) => (dispatch) => {
  try {
    dispatch(sendingAuthForm())
    localStorage.setItem("@superhero-isAuth", "true");
    localStorage.setItem("@superhero-data", JSON.stringify({
      name,
      email
    }));
    dispatch(completedSendAuthAuthForm())
  } catch (error) {
    dispatch(errorSendAuthAuthForm({ error }))
  }
}