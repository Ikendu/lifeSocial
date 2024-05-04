const express = require(`express`);
const app = express();
const userRouter = require(`./routes/user`);

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

app.use(`/user`, userRouter);

app.listen(8800, () => console.log(`App is running at port 8800`));
