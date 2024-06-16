import express from 'express';
import cors from 'cors';
import joyasRoutes from './routes/joyas.routes.js';

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', joyasRoutes )

app.listen(`${PORT}`, console.log(`Server on http://localhost:${PORT}`));
