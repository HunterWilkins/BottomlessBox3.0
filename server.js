const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log("The Bottomless Box is Opened! " + PORT);
});