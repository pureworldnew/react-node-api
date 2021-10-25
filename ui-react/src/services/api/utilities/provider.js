import axios from "axios";
import { handleResponse, handleError } from "./response";

const BASE_URL = "/api";

/**@param {string} resource */
const getAll = (resource) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {string} id */
const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {object} model */
const post = (resource, model) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {object} model */
const put = (resource, id, model) => {
  return axios
    .put(`${BASE_URL}/${resource}/${id}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {object} model*/
const patch = (resource, model) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {string} ids */
const remove = (resource, ids) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, { data: { ids: ids } })
    .then(handleResponse)
    .catch(handleError);
};

/**@param {string} resource */
/**@param {string} ids */
const removeAll = (resource, ids) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, { data: { ids: ids } })
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
  removeAll,
};
