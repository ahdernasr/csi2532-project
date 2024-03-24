module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define("Hotel", {
        hotelID: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true
        },
        hotelChainID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'HotelChain',
                key: 'hotelChainID'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberOfRooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    Hotel.associate = (models) => {
        Hotel.belongsTo(models.HotelChain, {
            foreignKey: 'hotelChainID'
        });
    }

    return Hotel;
}