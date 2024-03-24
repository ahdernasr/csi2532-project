module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        clientID: {
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
        socialSecurityNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })
    return Client;
    
}