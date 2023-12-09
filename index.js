const PeopleNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (PeopleNames) => {
  return getFirstNames(PeopleNames);
};

module.exports = getPeopleInCity;
