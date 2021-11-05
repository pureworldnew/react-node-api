import * as type from "../types";

export function loadRecruiters() {
  return {
    type: type.LOAD_RECRUITERS_REQUESTED,
  };
}
