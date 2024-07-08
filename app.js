const express = require('express');
const activityRoutes = require('./routes/activityRoutes');
const sequelize = require('./config/database');
const Activity = require('./models/activity');

const app = express();

app.use(express.json());

app.use('/api/activities', activityRoutes);

const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // forçando a recriação do banco de dados
  console.log('Database synced');
};

syncDatabase();

module.exports = app;
