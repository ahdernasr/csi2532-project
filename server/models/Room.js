module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define("Room", {
        roomID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        hotelID: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'Hotel', // referenced model
                key: 'hotelID' // primary key of the referenced model
            }
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.DECIMAL(8, 2), 
        },
        email: {
            type: DataTypes.STRING,
        },
        oceanView: {
            type: DataTypes.BOOLEAN,
        },
        mountainView: {
            type: DataTypes.BOOLEAN,
        },
        problems: {
            type: DataTypes.TEXT,
        },
        extensibility: {
            type: DataTypes.BOOLEAN
        }

    })

    // associating with the foreign key
    Room.associate = (models) => {
        Room.belongsTo(models.Hotel, {
            foreignKey: 'hotelID'
        });
    };
    
    return Room;
}