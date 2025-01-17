const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const rootDir = require("./util/path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const errorController = require("./controllers/error");

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);
app.use("/", contactRoutes);

app.use(errorController.get404);

app.listen(3000);
