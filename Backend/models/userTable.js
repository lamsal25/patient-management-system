//sequelize helps to interact with database,
//create tables, and also support database queries
const usertable = (sequelize, DataTypes)=>{
    //.define => links specific tables
    const user = sequelize.define('user',{  //here user indicates the table name in database
        
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail: true
            }
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },

        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[8,100]
            }
        }
    })
    return user;
}
module.exports = usertable