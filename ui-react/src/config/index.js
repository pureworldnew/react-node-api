export const DEFAULT_LANGUAGE = "en";
// Moment js date formats as per application requirements.
export const dateConfig = {
  format1: "dddd, MMM Do", // shows date like Monday, June 1st
  format2: "DD/MM", // shows date like 09/06
  format3: "DD/MM/YYYY", // day month year
  format4: "ddd, MMM DD", // eg. "Mon, Sep 07"
  format5: "YYYY-MM-DD",
};

export const recruiterColumnsConfig = [
  {
    field: "createdTime",
    headerName: "Created",
    width: 250,
    editable: true,
  },
  {
    field: "startTime",
    headerName: "Start Time ( UTC - 6 )",
    width: 250,
    editable: true,
  },
  {
    field: "startTimeLocal",
    headerName: "Start Time ( UTC + 8 )",
    width: 250,
    editable: true,
  },
  {
    field: "interviewerName",
    headerName: "Interviewer Name",
    width: 150,
    editable: true,
  },
  {
    field: "companyName",
    headerName: "Company Name",
    width: 200,
    editable: true,
  },
  {
    field: "roleName",
    headerName: "Role Name",
    width: 150,
    editable: true,
  },
  {
    field: "kindOfInterview",
    headerName: "Kind Of Interview",
    width: 200,
  },
  {
    field: "extraNotes",
    headerName: "Anything sharing",
    width: 400,
    editable: true,
  },
];

export const companyColumnsConfig = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "companyName",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "companySize",
    headerName: "Size",
    type: "number",
    width: 80,
    editable: true,
  },
  {
    field: "companyLocation",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "jobRole",
    headerName: "Role",
    width: 150,
    editable: true,
  },
  {
    field: "jobType",
    headerName: "Type",
    width: 100,
  },
  {
    field: "jobRating",
    headerName: "Rating",
    width: 100,
  },
  {
    field: "jobHow",
    headerName: "How",
    width: 100,
  },
  {
    field: "jobWhere",
    headerName: "Where",
    width: 100,
    editable: true,
  },
  {
    field: "jobReq",
    headerName: "Requirements",
    width: 150,
    editable: true,
  },
  {
    field: "jobSkills",
    headerName: "Skills",
    width: 210,
    editable: true,
  },
  {
    field: "socialAccount",
    headerName: "Account",
    width: 100,
  },
  {
    field: "regDate",
    headerName: "Date",
    width: 100,
  },
  {
    field: "regWeekday",
    headerName: "weekday",
    width: 100,
  },
];

export const convertLocaleTime = (time, locale) => {
  return new Date(time).toLocaleString("en-US", {
    timeZone: locale,
  });
};
export const scheduleColumnsConfig = [
  {
    field: "created",
    headerName: "Created",
    width: 250,
    editable: true,
  },
  {
    field: "creator",
    headerName: "Creator",
    width: 100,
    editable: true,
  },
  {
    field: "id",
    headerName: "Id",
    width: 50,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    editable: true,
  },
  {
    field: "startDateTime",
    headerName: "Start Time ( UTC - 6 )",
    width: 250,
    editable: true,
  },
  {
    field: "startDateTimeZone",
    headerName: "start Date timezone",
    width: 100,
    editable: true,
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 100,
    editable: true,
  },
  {
    field: "organizer",
    headerName: "organizer",
    width: 100,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    editable: true,
  },
];
