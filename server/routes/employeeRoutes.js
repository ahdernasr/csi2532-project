const express = require('express');
const router = express.Router();
const { createEmployee, updateEmployee, deleteEmployee } = require('../sql/employeeOperations');

// Get all Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single Employee by id
router.get('/:employeeID', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.employeeID);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new Employee
router.post('/', async (req, res) => {
  try {
    const employee = await createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Employee
router.put('/:employeeID', async (req, res) => {
  try {
    const employee = await updateEmployee(req.params.employeeID, req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an Employee
router.delete('/:employeeID', async (req, res) => {
  try {
    await deleteEmployee(req.params.employeeID);
    res.status(200).send('Employee successfully deleted');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
