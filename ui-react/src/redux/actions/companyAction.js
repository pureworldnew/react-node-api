import * as type from "../types";

export function getCompanies(companies) {
  return {
    type: type.GET_COMPANIES_REQUESTED,
    payload: companies,
  };
}
