// All user related database operations can be defined here.

import { SYSTEM_ERROR } from "../config/CONSTANTS";

export const getAllCompanys = () => {
  console.log("userServices > getAllCompanys called...");
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([
          {
            id: Math.floor(Math.random() * 1000001),
            companySize: Math.floor(Math.random() * 101),
            companyName: "Demo Company",
            companyLocation: "Texas",
            jobRole: "frontend developer",
            jobType: "Contract",
            jobRating: "150k",
            jobReq: "test job description",
            jobSkills: "React, Node, Javascript",
            jobWhere: "Linkedin",
            jobHow: "Recruiter",
            socialAccount: "China",
            regDate: "2021-09-21",
            regWeekday: "Monday",
          },
        ]);
      }, 5000);
    } catch (error) {
      console.error("in services > getAllCompanys, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
