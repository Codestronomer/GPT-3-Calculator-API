const express = require('express');

const app = express();
const port = 3000;

const json = express.json()

app.get("/", (req, res) => {
        res.send({
                "slackUsername": "John Rumide",
                "backend": true,
                "integer": 21,
                "bio": "Hi, i'm John Rumide, A software developer"
        });
});

app.listen(port, () => {
        console.log(`Listening on port http://localhost:${port}`);
})
