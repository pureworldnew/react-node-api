import * as type from "../types";

export function loadSchedules(schedules) {
  return {
    type: type.LOAD_SCHEDULE_REQUESTED,
    payload: schedules,
  };
}

export function getSchedules(searchCompanyName) {
  return {
    type: type.GET_SCHEDULE_REQUESTED,
    payload: searchCompanyName,
  };
}
