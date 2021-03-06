export const ROOT = "/";
export const LOGIN = "/login";
export const DASHBOARD = "/dashboard";
export const PAGE1 = "/page1";
export const SCHEDULE = "/schedule";
export const AUTH_PAGE1 = "/authorized1";
export const TECHNICAL = "/technical";
export const FINAL = "/final";
export const OFFER = "/offer";
export const PROJECT = "/project";
export const COMPANY = "/company";
export const RECRUITER = "/recruiter";

export const NAVLIST = [
  {
    name: "Home",
    route: ROOT,
  },
  {
    name: "Dashboard",
    route: DASHBOARD,
  },
];

export const NAVPRIVATELIST = [
  {
    name: "Schedule",
    route: SCHEDULE,
  },
  { name: "Recruiter", route: RECRUITER },
  {
    name: "Company",
    route: COMPANY,
  },
  {
    name: "Technical",
    route: TECHNICAL,
  },
  {
    name: "Final",
    route: FINAL,
  },
  {
    name: "Offer",
    route: OFFER,
  },
  {
    name: "Project",
    route: PROJECT,
  },
];

export const JOBTYPES = [
  { value: "contract", text: "Contract" },
  { value: "freelancer", text: "Freelancer" },
  { value: "fullTime", text: "Full time" },
];

export const JOBROLES = [
  { value: "frontendDev", text: "Frontend Developer" },
  { value: "backendDev", text: "Backend Developer" },
  { value: "fullstackDev", text: "Full stack Developer" },
  { value: "softwareEngineer", text: "Software Engineer" },
];
