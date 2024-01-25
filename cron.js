const cron = require("cron");
const https = require("https");

const backendUrl = "https://express-app-s1uu.onrender.com";
const job = new cron.CronJob("*/14 * * * *", function () {
  console.log("Restarting server");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted by cron");
      } else {
        console.log("Filed to restart server by cron");
      }
    })
    .on("error", (err) => {
      console.error("Error during restart of server by cron:", err.message);
    });
});

module.exports = {
  job,
};
