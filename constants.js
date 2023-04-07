require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "shivashishira@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Shishira S <shivashishira@gmail.com>",
  to: "eng19cs0296.shishiras@gmail.com",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};