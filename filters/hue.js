/*
  What's the time, Mr Wolf? (per a timezone)
*/
module.exports = function (data) {
	let locale = data.locale || "en-US";
	let now = new Date();
	now.setTime(now.getTime() + 30000); // the build takes about 30 seconds... let's add a little buffer.

	let hue = 15 * now.getHours() - 105;
	let sat = now.getHours() * 5 + 20;
	let lig = now.getHours() * 5 + 20;
	console.log(hue, now.getHours(), now.getMinutes());
	let clr =
		"<style>:root, html, body {--bg: hsl(" +
		hue +
		"," +
		sat +
		"%, " +
		lig +
		"%) }</style>";

	return clr;
};
