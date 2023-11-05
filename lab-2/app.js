// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
//
// app.use(bodyParser.json());
//
// const tasksRouter = require('./tasks');
//
// app.use('tasks', tasksRouter);
//
// const PORT = process.env.PORT || 3000;
//
//
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })


const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Configure body-parser to parse JSON bodies
app.use(bodyParser.json());

// Create a router
const router = express.Router();

// Define a simple GET route
router.get('/', (req, res) => {
    res.json({ message: 'Hello Express!' });
});

// Define a POST route
router.post('/data', (req, res) => {
    // Access the JSON body sent with the request
    const data = req.body;
    // Do something with the data
    // ...
    // Respond with a success message
    res.json({ message: 'Data received successfully', receivedData: data });
});



// ...

// PUT route for updating data
router.put('/data/:id', (req, res) => {
    // Access the path parameter
    const id = req.params.id;
    // Access the JSON body sent with the request
    const newData = req.body;
    // Perform the update operation
    // For example, update the data in the database with the new data
    // ...
    // Respond with a success message
    res.json({ message: 'Data updated successfully', updatedData: newData });
});

// DELETE route for deleting data
router.delete('/data/:id', (req, res) => {
    // Access the path parameter
    const id = req.params.id;
    // Perform the delete operation
    // For example, delete the data from the database with the given id
    // ...
    // Respond with a success message
    res.json({ message: 'Data deleted successfully', deletedId: id });
});





// Use the router on a sub-path (e.g., "/api")
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
