const express = require("express");
const path = require("path");
const app = express();
const auth = require("./routes/auth");
const users = require("./routes/users");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");
var cors = require("cors");

// Connect Mongodb Database
connectDB();

// cors
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server up 5000"));
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

// Serve static assets in production
if (process.envNODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log("Server started on port " + PORT));
