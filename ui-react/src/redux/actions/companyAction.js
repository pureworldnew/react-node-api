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

export function updateCompany(id, data) {
  return {
    type: type.UPDATE_COMPANY_REQUESTED,
    payload: { id, data },
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

export function setSelectedEditValue(value) {
  return {
    type: type.SET_SELECTED_EDIT,
    payload: value,
  };
}

export function setSelectedIds(ids) {
  return {
    type: type.SET_SELECTED_ID,
    payload: ids,
  };
}

export function getSingleCompany(id) {
  return { type: type.GET_SINGLE_COMPANY, payload: id };
}

export function addOpenModal() {
  return { type: type.ADD_OPEN_MODAL };
}
