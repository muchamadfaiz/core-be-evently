import express from "express";
import router from "./routes/api";

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
