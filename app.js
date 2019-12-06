const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Initialize express
const app = express();


// Load env variables
dotenv.config();

// Load routes
const logs = require('./app/routes/logs');

// Connect to mongoose
mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.log(err));


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use('/logs', logs);

// Start server
const port = 5555;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
