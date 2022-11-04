const express = require('express');
const cors = require('cors');


const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("", (req, res) => {
        res.send({
                "slackUsername": "John Rumide",
                "backend": true,
                "age": 21,
                "bio": "Hi, i'm John Rumide, A software developer"
        });
});

app.post("", (req, res) => {
        let resp = {
                operation: req.body.operation_type,
                x_int: req.body.x,
                y_int: req.body.y
        }

        if (resp.operation.includes("addition")) {
                res.send({
                        "slackUsername": "John Rumide",
                        "result": (parseInt(resp.x_int) + parseInt(resp.y_int)),
                        "operation_type": resp.operation
                })
        } else if (resp.operation.includes("multiplication")) {
                res.send({
                        "slackUsername": "John Rumide",
                        "result": (parseInt(resp.x_int) * parseInt(resp.y_int)),
                        "operation_type": resp.operation
                })
        } else {
                try {
                        res.send({
                                "slackUsername": "John Rumide",
                                "result": (parseInt(resp.x_int) / parseInt(resp.y_int)),
                                "operation_type": resp.operation
                        })
                } catch (error) {
                        res.send("Zero Division error")
                }
        }
})

app.listen(port, () => {
        console.log(`Listening on port http://localhost:${port}`);
})
