// Countdown 

$(function () {
	var launchDay = new Date();
	launchDay = new Date(launchDay.getFullYear() + 0, 12 - 1, 25);
	$('#LaunchCountdown').countdown({until: launchDay});
	$('#year').text(launchDay.getFullYear());
});