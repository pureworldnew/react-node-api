const { ApiCore } = require("../utilities/core");

const url = "schedules";

const apiSchedules = new ApiCore({
  getAll: true,
  getAllSearch: true,
  getSingle: true,
  post: true,
  put: true,
  patch: true,
  remove: true,
  url: url,
});

apiSchedules.customAPI = () => {
  //Add custom api call logic here
};

export default apiSchedules;
