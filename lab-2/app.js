const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// In-memory data store
const dataStore = {};

// Router setup
const router = express.Router();

// GET route to fetch data
router.get('/data/:id', (req, res) => {
    const { id } = req.params;
    const data = dataStore[id];
    if (data) {
        res.json({ data });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});

// POST route to create data
router.post('/data', (req, res) => {
    const { id, content } = req.body;
    if (dataStore[id]) {
        return res.status(409).json({ message: 'Data already exists' });
    }
    dataStore[id] = content;
    res.status(201).json({ message: 'Data created', data: content });
});

// PUT route to update data
router.put('/data/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    if (!dataStore[id]) {
        return res.status(404).json({ message: 'Data not found' });
    }
    dataStore[id] = content;
    res.json({ message: 'Data updated', data: content });
});

// DELETE route to delete data
router.delete('/data/:id', (req, res) => {
    const { id } = req.params;
    if (!dataStore[id]) {
        return res.status(404).json({ message: 'Data not found' });
    }
    delete dataStore[id];
    res.json({ message: 'Data deleted' });
});

app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
