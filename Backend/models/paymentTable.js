// models/Patient.js
const paymenttable = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {  //payments will be the databse name
        name: { type: DataTypes.STRING, allowNull: false },
        age: DataTypes.INTEGER,
        gender:{ type: DataTypes.STRING, allowNull: false },
        address:{ type: DataTypes.STRING, allowNull: false },
        email:{ type: DataTypes.STRING, allowNull: false },
        phone:{ type: DataTypes.INTEGER, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING},
        transaction_id: { type: DataTypes.STRING},
         
    });
  
    return Payment;
  };
  module.exports = paymenttable;
  