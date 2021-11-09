import { apiProvider } from "../utilities/provider";

const { ApiCore } = require("../utilities/core");

const url = "recruiters";

const loadUrl = "recruiters/load";

const apiRecruiters = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: true,
  patch: true,
  remove: true,
  url: url,
});

apiRecruiters.load = (startTime) => {
  return apiProvider.load(loadUrl, startTime);
};

export default apiRecruiters;
