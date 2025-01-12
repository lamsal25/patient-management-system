const {Sequelize, DataTypes} = require("sequelize")
 
const databseConfig = require('../config/dbConfig')
const databaseConfig = require("../config/dbConfig")

const usertable = require("./userTable")
const patientTable = require("./patientTable")
const patienttable = require("./patientTable")
const medicalHistories = require("./medicalHistory")
const sequelize = new Sequelize(
    databaseConfig.db,
    databseConfig.userName,
    databseConfig.password,
    {
        host: databseConfig.host,
        port: databseConfig.port,
        dialect: databaseConfig.dialect,   //database name
        
    }
)

sequelize.authenticate()
    .then(()=>{
        console.log("databse connection vayo hai ta")

    }) 
    .catch((Error)=>{
        console.log("Error aayo ta k vayo", Error)
    })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.users = usertable(sequelize, DataTypes)
db.patients = patienttable(sequelize, DataTypes)
db.medicalHistories = medicalHistories(sequelize,DataTypes)

db.sequelize.sync({force:false})
    .then(()=>{
        console.log("Sync success")
    })

module.exports = db;