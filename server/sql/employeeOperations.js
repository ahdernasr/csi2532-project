const { sequelize } = require('../models/Employee');

// Create a new Employee
const createEmployee = async (employeeData) => {
  const query = `
    INSERT INTO Employees (employeeID, name, address, role, socialSecurityNumber)
    VALUES (${employeeData.employeeID}, '${employeeData.name}', '${employeeData.address}', '${employeeData.role}', '${employeeData.socialSecurityNumber}')
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.INSERT });
    console.log('Employee created:', result[0]);
  } catch (error) {
    console.error('Error creating employee:', error);
  }
};

// Update an Employee
const updateEmployee = async (employeeID, updateData) => {
  const queryParts = [];
  for (const [key, value] of Object.entries(updateData)) {
    queryParts.push(`${key} = '${value}'`);
  }
  const query = `
    UPDATE Employees
    SET ${queryParts.join(', ')}
    WHERE employeeID = ${employeeID}
    RETURNING *;
  `;

  try {
    const result = await sequelize.query(query, { type: sequelize.QueryTypes.UPDATE });
    console.log('Employee updated:', result[0]);
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

// Delete an Employee
const deleteEmployee = async (employeeID) => {
  const query = `
    DELETE FROM Employees
    WHERE employeeID = ${employeeID};
  `;

  try {
    await sequelize.query(query, { type: sequelize.QueryTypes.DELETE });
    console.log('Employee deleted');
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};

module.exports = { createEmployee, updateEmployee, deleteEmployee };
