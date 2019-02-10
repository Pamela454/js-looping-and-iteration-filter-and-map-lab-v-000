// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue; });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, obj) {
   let value = obj[key];
  return drivers.filter(function(driver) {
    for (const key in obj) {
    return driver[key] === value;}
    });
}

function exactMatchToList() {
  
}
