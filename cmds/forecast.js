const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");

module.exports = async (args) => {
  const ora = (await import("ora")).default;
  const spinner = ora().start();

  try {
    const location = args.location || args.l || (await getLocation());
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    weather.forecast.forEach((item) =>
      console.log(
        `\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`
      )
    );
  } catch (error) {
    spinner.stop();
    console.error(error);
  }
};
