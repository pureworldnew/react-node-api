import * as type from "../types";

export function getCompanies(companies) {
  return {
    type: type.GET_COMPANIES_REQUESTED,
    payload: companies,
  };
}

export function addCompany(company) {
  return {
    type: type.ADD_COMPANY_REQUESTED,
    payload: company,
  };
}

export function modalOpen(status) {
  return {
    type: type.MODAL_OPEN,
    payload: status,
  };
}

export function setModalFlag(value) {
  return {
    type: type.SET_MODAL_FLAG,
    payload: value,
  };
}
