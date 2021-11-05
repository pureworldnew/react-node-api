import * as type from "../types";

const initialState = {
  recruiters: [],
  loading: false,
  error: null,
};

export default function recruiters(state = initialState, action) {
  switch (action.type) {
    case type.GET_RECRUITERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_RECRUITERS_SUCCESS:
      return {
        ...state,
        loading: false,
        recruiters: action.recruiters,
      };
    case type.GET_RECRUITERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.LOAD_RECRUITERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.LOAD_RECRUITERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.LOAD_RECRUITERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
