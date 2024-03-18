const { User } = require('./models');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
