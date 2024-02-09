import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from "./config";
import linksRouter from "./routers/link";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/links', linksRouter);


const run = async () => {

  await mongoose.connect(config.mongoose.db);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};
void run();