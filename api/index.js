const express = require(`express`);
const app = express();

const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
const helmet = require(`helmet`);

const morgan = require(`morgan`);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`MongoDB connected well`));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan(`common`));

app.get(`/`, (req, res) => {
  res.send(`Welcome to home page`);
});

app.listen(8800, () => console.log(`App is running at port 8800`));
