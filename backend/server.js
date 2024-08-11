const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');
const modelsRouter = require('./routes/modelsRouter.js')

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); 

app.use(cors()); 

app.use('/api/user', userRoutes); 
app.use("/api", modelsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
