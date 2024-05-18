const express = require(`express`);
const mongoose = require(`mongoose`);
const helmet = require(`helmet`);
const morgan = require(`morgan`);
const dotenv = require(`dotenv`);

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to database`));

//middlewares here
app.use(express.json());
app.use(helmet());
app.use(morgan(`common`));

const port = 3000;
app.listen(port, () => console.log(`App started at port ${port}`));
