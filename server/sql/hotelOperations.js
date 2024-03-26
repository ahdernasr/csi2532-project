const { sequelize } = require('../models/Hotel');

// Create a new Hotel
const createHotel = async (hotelData) => {
  const query = `
    INSERT INTO Hotels (hotelID, hotelChainID, name, address, telephoneNumber, email, rating, numberOfRooms)
    VALUES (${hotelData.hotelID}, ${hotelData.hotelChainID}, '${hotelData.name.replace(/'/g, "''")}', '${hotelData.address.replace(/'/g, "''")}', '${hotelData.telephoneNumber}', '${hotelData.email}', ${hotelData.rating}, ${hotelData.numberOfRooms})
    RETURNING *;
  `;

  try {
    const [result, ] = await sequelize.query(query, { type: sequelize.QueryTypes.INSERT });
    console.log('Hotel created:', result);
    return result;
  } catch (error) {
    console.error('Error creating hotel:', error);
    throw error;
  }
};

// Update a Hotel
const updateHotel = async (hotelID, updateData) => {
  const assignments = Object.entries(updateData).map(([key, value]) => 
    typeof value === 'number' ? `${key} = ${value}` : `${key} = '${value.replace(/'/g, "''")}'`
  ).join(', ');
  
  const query = `
    UPDATE Hotels
    SET ${assignments}
    WHERE hotelID = ${hotelID}
    RETURNING *;
  `;

  try {
    const [result, ] = await sequelize.query(query, { type: sequelize.QueryTypes.UPDATE });
    console.log('Hotel updated:', result);
    return result;
  } catch (error) {
    console.error('Error updating hotel:', error);
    throw error;
  }
};

// Delete a Hotel
const deleteHotel = async (hotelID) => {
  const query = `
    DELETE FROM Hotels
    WHERE hotelID = ${hotelID};
  `;

  try {
    await sequelize.query(query, { type: sequelize.QueryTypes.DELETE });
    console.log('Hotel deleted');
  } catch (error) {
    console.error('Error deleting hotel:', error);
    throw error;
  }
};

module.exports = { createHotel, updateHotel, deleteHotel };
