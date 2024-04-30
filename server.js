const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});