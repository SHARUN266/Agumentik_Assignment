const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.post("/admin", (req, res) => {
  const { name, password } = req.body;
  if (name == "admin" || password == "1234") {
    res.status(200).send("Login successfull!");
  }
  if (name !== "admin" || password !== "1234") {
    res.status(200).send("Wrong username or password of admin");
  }
});

app.listen(PORT, () => {
  console.log(`Your app is running on ${PORT}`);
});
