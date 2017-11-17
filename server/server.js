const express = require("express");
const { router, BUILD_PATH } = require("./routes");

const port = process.env.PORT || 3000;

// configure the express server
const app = express();

app.set("port", port);

app.use(express.static(BUILD_PATH)).use("/", router);

// Start her up, boys
app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
