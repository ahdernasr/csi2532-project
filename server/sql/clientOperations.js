const { sequelize } = require('../models/Client');

// Create a new Client
const createClient = async (clientData) => {
  const query = `
    INSERT INTO Clients (clientID, name, address, socialSecurityNumber)
    VALUES (${clientData.clientID}, '${clientData.name}', '${clientData.address}', ${clientData.socialSecurityNumber})
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.INSERT });
    console.log('Client created:', result[0]);
  } catch (error) {
    console.error('Error creating client:', error);
  }
};

// Update a Client
const updateClient = async (clientID, updateData) => {
  const queryParts = [];
  for (const [key, value] of Object.entries(updateData)) {
    queryParts.push(`${key} = '${value}'`);
  }
  const query = `
    UPDATE Clients
    SET ${queryParts.join(', ')}
    WHERE clientID = ${clientID}
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.UPDATE });
    console.log('Client updated:', result[0]);
  } catch (error) {
    console.error('Error updating client:', error);
  }
};

// Delete a Client
const deleteClient = async (clientID) => {
  const query = `
    DELETE FROM Clients
    WHERE clientID = ${clientID};
  `;

  try {
    await sequelize.query(query, { type: sequelize.QueryTypes.DELETE });
    console.log('Client deleted');
  } catch (error) {
    console.error('Error deleting client:', error);
  }
};

module.exports = { createClient, updateClient, deleteClient };
