const express = require(`express`);
const mongoose = require(`mongoose`);
const helmet = require(`helmet`);
const morgan = require(`morgan`);
const dotenv = require(`dotenv`);
const userRoutes = require(`./routes/users`);
const authRoutes = require(`./routes/auth`);
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to database`));

//middlewares here
app.use(express.json());
app.use(helmet());
app.use(morgan(`common`));

app.use(`/api/users`, userRoutes);
app.use(`/api/auth`, authRoutes);

const port = 5173;
app.listen(port, () => console.log(`App started at port ${port}`));
