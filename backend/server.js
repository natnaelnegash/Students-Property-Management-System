const config = require("./config/index");
const express = require("express");
const routes = require("./routes");
const app = express();

const PORT = config.PORT;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
