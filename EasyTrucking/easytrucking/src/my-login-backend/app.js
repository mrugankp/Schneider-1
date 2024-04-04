const express = require('express');
const cors = require('cors');
const User = require('./models/user'); // Update the path if needed
const sequelize = require('./sequelize'); // Update the path if needed

const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if no port is specified

app.use(cors());
app.use(express.json());

sequelize.sync(); // This will create the database table for our User model if it doesn't exist already

// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Directly store the password as provided (not secure)
    const newUser = await User.create({ email, password });

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email already in use' });
    } else {
      console.error('Signup error:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});


// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by their email
        const user = await User.findOne({ where: { email } });

        // If user found and password matches (without hashing)
        if (user && user.password === password) {
            // Here you might want to create a session or generate a token
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid login credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


