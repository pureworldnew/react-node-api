import * as type from "../types";

const initialState = {
  companies: [],
  loading: false,
  error: null,
  modalOpen: false,
  modalFlag: "",
  selectedEditValue: {},
  selectedIds: null,
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
    case type.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        modalOpen: false,
        companies: action.companies,
      };
    case type.UPDATE_COMPANY_FAILED:
      return {
        ...state,
        modalOpen: false,
        error: action.message,
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
        modalOpen: false,
        companies: action.companies,
      };
    case type.ADD_COMPANY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.GET_SINGLE_COMPANY_SUCCESS:
      return {
        ...state,
        selectedEditValue: action.company,
        modalOpen: true,
        modalFlag: "update",
      };
    case type.GET_SINGLE_COMPANY_FAILED:
      return { ...state, error: action.message };
    case type.ADD_OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalFlag: "add",
        selectedEditValue: {},
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
    case type.SET_SELECTED_EDIT:
      return {
        ...state,
        selectedEditValue: action.payload,
      };
    case type.SET_SELECTED_ID:
      return {
        ...state,
        selectedIds: action.payload,
      };
    default:
      return state;
  }
}
