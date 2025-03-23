import config from "../config/db.config"
import FlashCardModel from "./flashcard-model"
import Sequelize from "sequelize"

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,

    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

// Initialize our database and include ORM configurations
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Include our database models here
db.flashcards = FlashCardModel(sequelize, Sequelize);
// ... Reminder to myself to add more here

export default db;