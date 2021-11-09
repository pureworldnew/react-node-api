const http = require("http");
const https = require("https");
const httpRequest = (options) => {
  return new Promise((resolve, reject) => {
    const port = options.port == 443 ? https : http;

    let output = "";

    const req = port.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`statusCode=${res.statusCode}`));
      }
      // cumulate data
      res.setEncoding("utf8");

      res.on("data", (chunk) => {
        output += chunk;
      });
      // resolve on end
      res.on("end", () => {
        try {
          let obj = JSON.parse(output);
          resolve(obj);
        } catch (e) {
          reject(e);
        }
      });
    });

    // reject on request error
    req.on("error", (err) => {
      reject(err);
    });

    req.end();
  });
};
const asyncFilter = async (arr, predicate) => {
  const results = await Promise.all(arr.map(predicate));

  return arr.filter((_v, index) => results[index]);
};
module.exports = { httpRequest, asyncFilter };
