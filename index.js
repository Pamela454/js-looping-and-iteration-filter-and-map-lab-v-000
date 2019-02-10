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
  return drivers.filter(function(driver) {
    let Prop = Object.getOwnPropertyNames(obj)
    let Value = Object.getOwnPropertyNames(driver)
    return Prop === Value; });
}