const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/student/Student');
const port = 3000;
const app = express();
require('dotenv').config();

// Mongoose configuration
mongoose.connect(process.env.DATABASE_URL, 
    { 
        useNewUrlParser: true, useUnifiedTopology: true
    });
const db = mongoose.connection
try {
    db.once('Open connection ', () => console.log('Connected to Database'));
} catch (error) { 
    db.on('Error connection ', (error) => console.error('Error to connecting database'));
}

app.use(express.json());
app.use('/api/v1', studentRoute);

app.listen(port, () => console.log(`Apps Running on port ${port}`))