module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define("Reservation", {
        reservationID: { // PRIMARY KEY
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true 
        },
        clientID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Client',    // Referenced model
                key: 'clientID'     // PRIMARY KEY of  the referenced model
            }
        },
        roomID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Room',      // Referenced model
                key: 'roomID'       // PRIMARY KEY of  the referenced model
            }
        },
        dateOfReservation: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })

    // Defintion of associations
    Reservation.associate = (models) => {

        Reservation.belongsTo(models.Cleint, {
            foreignKey: 'clientID'
        });

        Reservation.belongsTo(models.Room, {
            foreignKey: 'roomID'
        });

    }

    return Reservation;
    
}