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
    field: "companyName",
    headerName: "Company Name",
    width: 200,
    editable: true,
  },
  {
    field: "interviewerName",
    headerName: "Interviewer Name",
    width: 150,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
    editable: true,
  },

  {
    field: "startTime",
    headerName: "Start Time ( UTC - 6 )",
    width: 200,
    editable: true,
  },
  {
    field: "startTimeLocal",
    headerName: "Start Time ( UTC + 8 )",
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
  {
    field: "createdTime",
    headerName: "Created",
    width: 200,
    editable: true,
  },
];

export const companyColumnsConfig = [
  { field: "id", headerName: "No", width: 70 },
  {
    field: "companyName",
    headerName: "Name",
    width: 500,
    renderCell: (params) => {
      return (
        <a href={params.row.companyName} target="_blank" rel="noreferrer">
          {params.row.companyName}
        </a>
      );
    },
  },
  {
    field: "companySize",
    headerName: "Size",
    type: "number",
    width: 150,
  },
  {
    field: "companyLocation",
    headerName: "Location",
    width: 150,
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
    field: "jobReq",
    headerName: "Requirements",
    width: 550,
    editable: true,
  },
  {
    field: "jobSkills",
    headerName: "Skills",
    width: 210,
    editable: true,
  },
  {
    field: "regDate",
    headerName: "Date",
    width: 150,
  },
];
export const scheduleColumnsConfig = [
  {
    field: "companyName",
    headerName: "Company Name",
    width: 250,
    editable: true,
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 300,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "startDateTime",
    headerName: "Start Time ( UTC - 6 )",
    width: 200,
    editable: true,
  },
  {
    field: "startDateTimeLocal",
    headerName: "Start Time ( UTC + 8 )",
    width: 200,
    editable: true,
  },
  {
    field: "roleName",
    headerName: "Role Name",
    width: 250,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
    editable: true,
  },
  {
    field: "creator",
    headerName: "Creator",
    width: 200,
    editable: true,
  },
  {
    field: "organizer",
    headerName: "Organizer",
    width: 200,
    editable: true,
  },
  {
    field: "eventName",
    headerName: "Event Name",
    width: 150,
    editable: true,
  },
  {
    field: "kindOfInterview",
    headerName: "Kind Of Interview",
    width: 250,
    editable: true,
  },
  {
    field: "created",
    headerName: "Created ( UTC + 8 )",
    width: 200,
    editable: true,
  },
];
export const convertLocaleTime = (time, locale) => {
  return new Date(time).toLocaleString("en-US", {
    timeZone: locale,
  });
};

export const parseDescription = (str) => {
  return str
    .split(/\r?\n/)
    .filter((e) => {
      return e.length > 0 && e.split(":").length === 2;
    })
    .map((e) => {
      let obj = {};
      obj[e.split(":")[0]] = e.split(":")[1];
      return obj;
    });
};
