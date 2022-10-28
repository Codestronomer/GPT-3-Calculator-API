const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
        res.send({
                "slackUsername": "John Rumide",
                "backend": true,
                "age": 21,
                "bio": "Hi, i'm John Rumide, A software developer"
        });
});

app.listen(port, () => {
        console.log(`Listening on port http://localhost:${port}`);
})
