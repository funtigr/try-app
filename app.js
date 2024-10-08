const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

let cpuLoad = 0;

app.get('/', (req, res) => {
    // Simulate CPU load (can be adjusted)
    const start = Date.now();
    while (Date.now() - start < 200) { // 200ms of CPU load
        cpuLoad++;
    }
    res.send(`Hello from Node.js! CPU load: ${cpuLoad}`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});