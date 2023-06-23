import express from 'express';
import authenticacionRouter from './routes/authentication.routes.js';
import usersRouter from './routes/user.routes.js';
import seriesRouter from './routes/serie.routes.js';
import { PORT } from './configs/environments.js'
import connectDB from './configs/mongo.js';


const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth",authenticacionRouter)
app.use("/users",usersRouter);
app.use("/series",seriesRouter);



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