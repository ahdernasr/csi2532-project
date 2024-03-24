module.exports = (sequelize, DataTypes) => {
    const HotelChain = sequelize.define("HotelChain", {
       
        chaineHotelID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        telephoneNumber: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        }
    })
    
    return HotelChain;
    
}