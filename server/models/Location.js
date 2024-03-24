module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("Location", {
        locationID: { // PRIMARY KEY
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
        },
        reservationID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Reservation', // Referenced model
                key: 'reservationID' // Primary Key to referenced model
            }
        },
        employeeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Employee', // Referenced model
                key: 'employeeID' // Primary Key to referenced model
            }
        },
        dateOfReservation: {
            type: DataTypes.DATE
        }

    })

    // Defintion of associate
    Location.associate = (models) => {

        Location.belongsTo(models.Reservation, {
            foreignKey: 'reservationID'
        });

        Location.belongsTo(models.Employee, {
            foreignkey: 'employeeID'
        });

    }

    return Location;
    
}