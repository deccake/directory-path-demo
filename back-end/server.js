import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import readDirectoriedRoute from "./routes/fileDirectoriesRoute";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());

app.use("/", readDirectoriedRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
