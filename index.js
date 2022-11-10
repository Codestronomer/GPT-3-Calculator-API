const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai")

// create express app
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser')

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// OpenAI Authentication configuration
const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get("", (req, res) => {
        res.send("Hello, I'm marv, An AI calculator.");
	res.send("Send a POST request with your question in the operation_type parameter!")
});

app.post("", (req, res) => {
        let operation = req.body.operation_type;
        let x_int = req.body.x;
        let y_int = req.body.y;

        if (x_int && y_int) {
                if (operation.includes("addition")) {
                        try {
                                const result = parseInt(x_int) + parseInt(y_int);
                                res.send({
                                        "result": result,
                                        "operation_type": operation
                                })
                        } catch (err) {
                                console.log(err);
                        }
                } else if (operation.includes("multiplication")) {

                        try {
                                const result = parseInt(x_int) * parseInt(y_int)
                                res.send({
                                        "slackUsername": "John Rumide",
                                        "result": result,
                                        "operation_type": operation
                                })
                        } catch (err) {
                                console.log(err);
                        }
                } else if (operation.includes("subtraction")) {
                        try {
                                const result = (parseInt(x_int) - parseInt(y_int));
                                res.send({
                                        "result": result,
                                        "operation_type": operation
                                })
                        } catch (error) {
                                console.log(error);
                        }
                } else {
                        try {
                                const result = parseInt(x_int) / parseInt(y_int);
                                res.send({
                                        "slackUsername": "John Rumide",
                                        "result": result,
                                        "operation_type": operation
                                })
                        } catch (error) {
                                console.log(error);
                        }
                }
        } else {
                // Send a request with the operation to OpenAi and return Ai response
                const askOpenAi = async (operation) => {
                        try {
                                let response = await openai.createCompletion({
                                        model: "text-davinci-002",
                                        prompt: 'Input: Calculate this and reply with Just the resulting number, ' + operation,
                                        temperature: 0,
                                        max_tokens: 100,
                                        top_p: 1,
                                        frequency_penalty: 0,
                                        presence_penalty: 0,
                                        stop: ["Input:"],

                                })
                                return response.data.choices[0].text.trim().replace('?', '');

                        } catch (err) {
                                console.log(err);
                        }
                }
                askOpenAi(operation).then((response) => {
                        const result = parseInt(response);
                        res.send({
                                "result": result,
                                "operation_type": operation
                        });
                })
        }
})

app.listen(port, () => {
        console.log(`Listening on port http://localhost:${port}`);
})
