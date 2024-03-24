module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        elsemployeelID: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING
        },
        socialSecurityNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return Employee;
    
}