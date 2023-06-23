import express from 'express';
import authenticacionRouter from './routes/auth.routers.js';
import usersRouter from './routes/users.routes.js';
import cors from 'cors';

import { PORT } from './configs/environments.js'
import connectDB from './configs/mongo.js';


const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth",authenticacionRouter)
app.use("/users",usersRouter);



async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
		process.exit();
	}
}

startSever();