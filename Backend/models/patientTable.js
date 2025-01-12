// models/Patient.js
const patienttable = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {  //patient is the databse name
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      sex: DataTypes.STRING,
      address: DataTypes.STRING,
    });
  
    Patient.associate = (models) => {
      Patient.hasMany(models.MedicalHistory, {
        foreignKey: 'patientId',
        as: 'medicalHistories',
      });
    };
  
    return Patient;
  };
  module.exports = patienttable;
  