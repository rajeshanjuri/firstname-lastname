const peoplenames = require("../country/state/city/index.js");
const firstnames = require("../utilities/utils/index.js");

const getPeopleInCity = function (peoplenames) {
  return firstnames(peoplenames);
};
module.exports = getPeopleInCity;
