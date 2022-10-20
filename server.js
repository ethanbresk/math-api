// setting up dependencies
const express = require('express');
const { create, all } = require('mathjs')
const math = create(all)
const PORT = process.env.PORT || 3000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// base request
server.get('/', (req, res) => {
    res.sendFile('intro.png' , { root : __dirname});
})

// basic math
server.get('/:input', (req, res) => {
    (async () => {
        try {
            const temp = req.params.input
            const input = temp.replaceAll('_', '/')
            var response = math.evaluate(input)
            res.send(response.toString())
        }
        catch (err) {
            res.send(err)
        }
    })();
})

// simplify
server.get('/simplify/:input', (req, res) => {
    (async () => {
        try {
            const input = req.params.input
            var response = math.simplify(input)
            res.send(response.toString())
        }
        catch (err) {
            res.send(err)
        }
    })();
})

// equality
server.get('/equality/:input', (req, res) => {
    (async () => {
        try {
            const input = req.params.input
            const a = input.substring(0, input.indexOf('='))
            const b = input.substring(input.indexOf('=') + 2)
            var response = math.equal(math.evaluate(a).toString(),math.evaluate(b).toString())
            res.send(response.toString())
        }
        catch (err) {
            res.send(err)
        }
    })();
})

// derivatives
server.get('/derivative/:input/:value', (req, res) => {
    (async () => {
        try {
            const input = req.params.input
            const value = req.params.value
            var response = math.derivative(input, value)
            res.send(response.toString())
        }
        catch (err) {
            res.send(err)
        }
    })();
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`));