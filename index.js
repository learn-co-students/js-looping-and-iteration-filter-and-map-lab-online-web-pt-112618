// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  const result = drivers.filter(function(driver) {
    if(driver.revenue >= number) {
      return driver
    }
  })
  return result;
}

function driverNamesWithRevenueOver(drivers, number) {
  const result = drivers.filter(function(driver) {
    if(driver.revenue >= number) {
      return driver.name
    }
  }).map(function(driver){ return driver.name})
  return result;
}

function exactMatch(drivers, obj) {
  const result = drivers.filter(function(driver) {
    if(driver.name === Object.values(obj).toString() || driver.revenue === parseInt(Object.values(obj).toString()))
    return driver;
  })
  return result;
}

function exactMatchToList(drivers, obj) {
  let objects = exactMatch(drivers, obj)
  const result = objects.map(function(object) {
    return object.name
  })
  return result
}
