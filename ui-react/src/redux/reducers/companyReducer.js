import * as type from "../types";

const initialState = {
  companies: [],
  loading: false,
  error: null,
  modalOpen: false,
  modalFlag: "",
};

export default function companies(state = initialState, action) {
  switch (action.type) {
    case type.GET_COMPANIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.companies,
      };
    case type.GET_COMPANIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.payload,
      };
    case type.SET_MODAL_FLAG:
      return {
        ...state,
        modalFlag: action.payload,
      };
    case type.ADD_COMPANY_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.ADD_COMPANY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
