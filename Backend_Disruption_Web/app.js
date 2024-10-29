const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");
const preferenceRoutes = require("./routes/preferenceRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/preferences", preferenceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
