/*
  What's the time, Mr Wolf? (per a timezone)
*/
module.exports = function (data) {
	let locale = data.locale || "en-US";
	let now = new Date();
	now.setTime(now.getTime() + 30000); // the build takes about 30 seconds... let's add a little buffer.

	let hue = 15 * now.getHours() - 120;
	console.log(hue, now.getHours(), now.getMinutes());
	// let time = now.toLocaleString(locale, {
	// 	timeZone: data.location,
	// 	hour: "numeric",
	// 	minute: "numeric",
	// });

	// let obj = {
	// 	time: time,
	// 	hue: hue,
	// };

	return hue;
	// return (time = now.toLocaleString(locale, {
	// 	timeZone: data.location,
	// 	hour: "numeric",
	// 	minute: "numeric",
	// }));
};
