const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

//MongoDB Atlas connect
mongoose.connect('mongodb+srv://officialsabarinarayan:9447103050@cluster0.buyzcu4.mongodb.net/finalproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.use(bodyParser.json());
app.use(cors());

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  User.findOne({ email })
    .then(user => {
      if (!user) {
        // User not found
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (isValid) {
              // Password is correct, login successful
              res.json({ message: 'Login successful' });
            } else {
              // Password is incorrect
              res.status(401).json({ message: 'Invalid credentials' });
            }
          })
          .catch(err => {
            console.error('Error comparing passwords:', err);
            res.status(500).json({ message: 'Internal server error' });
          });
      }
    })
    .catch(err => {
      console.error('Error finding user:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
