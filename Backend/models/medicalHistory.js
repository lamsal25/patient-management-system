const medicalHistories = (sequelize, DataTypes) => {
  const MedicalHistory = sequelize.define('medicalHistory', {
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
        model: 'patients', // Name of the target table
        key: 'id',         // Key in the target table
      },
    },
  });

  MedicalHistory.associate = (models) => {
    MedicalHistory.belongsTo(models.patients, {
      foreignKey: 'patientId',
      as: 'Patient',
      onDelete : 'CASCADE',   //helps in deleteing and editing. On deleteing/ updating the parent data, related child components are automatically deleted/updated

    });
  };

  return MedicalHistory;
};

module.exports = medicalHistories;
