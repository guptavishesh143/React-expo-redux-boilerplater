// import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

import {loginReducer} from '../reducer/loginReducer';

const {loginSucess, logout, setLoading} = loginReducer.actions;

export const loginUser = credentials => {
  return dispatch => {
    console.log ('credentials====>', credentials);
    dispatch (loginSucess (credentials));
  };
};
export const getAllCountriesData = params => {
  return dispatch => {};
};

export function loginStore () {
}
