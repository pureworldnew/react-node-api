import ScheduleView from "./ScheduleView";
import { useSelector } from "react-redux";
import { scheduleColumnsConfig } from "config";

export const ScheduleContainer = () => {
  const loading = useSelector((state) => state.schedules.loading);
  const error = useSelector((state) => state.schedules.error);
  const schedules = useSelector((state) => state.schedules.schedules);

  return (
    <ScheduleView
      loading={loading}
      error={error}
      data={schedules}
      columns={scheduleColumnsConfig}
    />
  );
};
