const { ApiCore } = require("../utilities/core");

const url = "companies";

const apiCompanies = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  remove: true,
  removeAll: true,
  url: url,
});

apiCompanies.customAPI = () => {
  //Add custom api call logic here
};

export default apiCompanies;
