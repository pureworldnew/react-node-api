import * as type from "../types";

export function loadRecruiters() {
  return {
    type: type.LOAD_RECRUITERS_REQUESTED,
  };
}

export function getRecruiters(recruiters) {
  return {
    type: type.GET_RECRUITERS_REQUESTED,
    payload: recruiters,
  };
}
