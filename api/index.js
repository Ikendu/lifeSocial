const express = require(`express`);
const mongoose = require(`mongoose`);
const helmet = require(`helmet`);
const morgan = require(`morgan`);
const dotenv = require(`dotenv`);
const userRoutes = require(`./routes/users`);
const authRoutes = require(`./routes/auth`);
const postRoutes = require(`./routes/posts`);
const cors = require(`cors`);

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to database`));

//middlewares here
app.use(express.json());
app.use(helmet());
app.use(morgan(`common`));
app.use(cors());

app.use(`/api/users`, userRoutes);
app.use(`/api/auth`, authRoutes);
app.use(`/api/posts`, postRoutes);

const port = 5000;
app.listen(port, () => console.log(`App started at port ${port}`));
