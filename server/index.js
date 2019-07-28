import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';


const app = express();

app.arguments(json);
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server Started on the port ${port}'));
