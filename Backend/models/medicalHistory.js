const medicalHistories = (sequelize, DataTypes) => {
    const MedicalHistory = sequelize.define('MedicalHistory', {
      condition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicines: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Patients', // Name of the target table
          key: 'id',         // Key in the target table
        },
      },
    });
  
    MedicalHistory.associate = (models) => {
      MedicalHistory.belongsTo(models.Patient, {
        foreignKey: 'patientId',
        as: 'patient',
      });
    };
  
    return MedicalHistory; 
  };
  
  module.exports = medicalHistories;
  