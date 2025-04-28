const config = require("./config/index");
const express = require("express");
const helmet = require("helmet");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.use(helmet());

const PORT = config.PORT;

app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
