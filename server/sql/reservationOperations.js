const { sequelize } = require('../models/Reservation');

// Create a new Reservation
const createReservation = async (reservationData) => {
  const query = `
    INSERT INTO Reservations (reservationID, clientID, roomID, dateOfReservation)
    VALUES (${reservationData.reservationID}, ${reservationData.clientID}, ${reservationData.roomID}, '${reservationData.dateOfReservation}')
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.INSERT });
    console.log('Reservation created:', result);
  } catch (error) {
    console.error('Error creating reservation:', error);
  }
};

// Update a Reservation
const updateReservation = async (reservationID, updateData) => {
  const query = `
    UPDATE Reservations
    SET dateOfReservation = '${updateData.dateOfReservation}'
    WHERE reservationID = ${reservationID}
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.UPDATE });
    console.log('Reservation updated:', result);
  } catch (error) {
    console.error('Error updating reservation:', error);
  }
};

// Delete a Reservation
const deleteReservation = async (reservationID) => {
  const query = `
    DELETE FROM Reservations
    WHERE reservationID = ${reservationID};
  `;

  try {
    await sequelize.query(query, { type: sequelize.QueryTypes.DELETE });
    console.log('Reservation deleted');
  } catch (error) {
    console.error('Error deleting reservation:', error);
  }
};

module.exports = { createReservation, updateReservation, deleteReservation };
