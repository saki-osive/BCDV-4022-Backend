const mongoose = require("mongoose");
const User = require('./user');
const {connect, connection} = require("mongoose");


// Connect to MongoDB
connect('mongodb://localhost:27017/myappdb' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', async () => {

    console.log('Connected to MongoDB');

    try {
        // Create a new user instance
        const newUser = new User({
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
        });

        // Save the user to the database using async/await
        await newUser.save();

        console.log('User saved successfully');
    } catch (error) {
        console.error('Error saving user:', error);
    } finally {
        // Close the MongoDB connection
        connection.close();
    }


})





