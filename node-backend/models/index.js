const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const db = {};

//database setup
const sequelize = new Sequelize("mysql://johnathaningle:P@$$w0rd@localhost:3306/swift_contacts");

//test the connection
sequelize.authenticate().then(() => {
    console.log("connection established");
}).catch(err => {
    console.log("couldnt connect to the database");
});

fs.readdirSync(__dirname).filter((file) => file !== 'index.js').forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});