require("dotenv").config();
const app = require("./app");
const connectDb = require("./DataBase/mongodb");
const { app_config, db_config } = require("./config");

async function init_app() {
  try {
    await connectDb(db_config);

    app.listen(app_config.port, () =>
      console.log("Listen in port : ", app_config.port)
    );
  } catch (error) {
    console.log("error : ", error.message);
  }
}

init_app();
