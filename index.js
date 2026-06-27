const express = require("express");
const app = express();

app.use("/", (req,res) => {
    res.send("Hello")
});


app.listen(9010, () => {
    console.log("app running at 9010 port")
});