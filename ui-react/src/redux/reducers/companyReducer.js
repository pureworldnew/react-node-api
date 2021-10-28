import * as type from "../types";

const initialState = {
  companies: [],
  loading: false,
  error: null,
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
    default:
      return state;
  }
}
