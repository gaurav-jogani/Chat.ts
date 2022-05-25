const express = require('express');
const { chats } = require('./data/data');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // eslint-disable-next-line no-underscore-dangle
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.status(200).send(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server Started on PORT 5000'));
