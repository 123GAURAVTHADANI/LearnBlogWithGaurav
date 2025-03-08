const express = require("express");
const { dbConfig } = require("./Configurations/db.config");
const { userRouter } = require("./Routers/user.router");
var app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
// app.use("/api/v1/article", articleRouter);

app.listen(5001, () => {
  dbConfig();
  console.log("Server is running on port 5001");
});

// 2 mins 

// aRTICLES , getArtcile , comment