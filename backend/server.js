const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');
const modelsRouter = require('./routes/modelsRouter.js')
const path = require("path")

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

app.use(cors()); 

app.use('/api/user', userRoutes); 
app.use("/api", modelsRouter);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "Frontend","build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
