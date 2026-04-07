import express from 'express';
import playerRoutes from './routes.js'
import Sequelize from 'sequelize';
import config from './config/database.js'
import Player from './models/Player.js';

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config)
Player.init(sequelize)

const PORT = 3001;

app.use('/players', playerRoutes);

sequelize.authenticate().then(() => {
    console.log("Database is UP!")
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
}).catch((err) => console.log(err));
