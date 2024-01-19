import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
// import  mongoose from "mongoose";
import "dotenv/config.js";

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

/*
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));
        */
    
app.use(morgan('dev'));
app.use(bodyParser.json());
import apiRoute from './routes/api.js';

app.use('/api', apiRoute);

if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}


app.get('/', async(req, res) => {
  res.json("Backend index");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});