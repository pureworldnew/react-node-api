import * as type from "../types";

export function loadSchedules(schedules) {
  return {
    type: type.LOAD_SCHEDULE_REQUESTED,
    payload: schedules,
  };
}
