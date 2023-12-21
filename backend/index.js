import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
// import { Book } from "./models/bookModels.js";
import cors from 'cors';
const app = express();

app.use(express.json());

// first Method(Simple)
app.use(cors());
// Custom Method
// app.use(cors({
//     origin: 'https://read-me-7kt4.vercel.app',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MEARN");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
