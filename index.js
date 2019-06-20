function driversWithRevenueOver(arr, rev) {
	return arr.filter(function (driver) {
		return driver.revenue > rev;
	});
}