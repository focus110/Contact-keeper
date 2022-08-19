const express = require("express");
const app = express();
const auth = require("./routes/auth");
const users = require("./routes/users");
const contacts = require("./routes/contacts");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server up 5000"));
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

app.listen(PORT, () => console.log("Server started on port " + PORT));
