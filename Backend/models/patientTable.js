// models/Patient.js
const patienttable = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {  //patients will be the databse name
    
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  Patient.associate = (models) => {
    Patient.hasMany(models.medicalHistories, {
      foreignKey: 'patientId',
      as: 'medicalHistory',
      onUpdate: 'CASCADE',  //helps in deleteing and editing. On deleteing/ updating the parent data, related child components are automatically deleted/updated
      onDelete : 'CASCADE',
    });
  };

  return Patient;
};
module.exports = patienttable;
