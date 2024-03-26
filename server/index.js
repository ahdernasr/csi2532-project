const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hotelRoutes = require('./routes/hotelRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const roomRoutes = require('./routes/roomRoutes');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());

// Using the routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
