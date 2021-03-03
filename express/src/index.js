const path = require('path')

const  express = require('express')
const app = express()
const port = 3000

const staticpath = path.join(__dirname, '../public');

//builtin middleware
app.use(express.static (staticpath))

app.get('/', (req, res) => {
    res.write('<h1>welcome to my home page');
    res.write('<h1>welcome to my home page2');
    ;})

app.get('/about', (req, res) => res.send('This is About Page!'))
app.get('/contact', (req, res) => res.send('This is contact Page!'))

app.get('/temp', (req, res) => {
    res.send ({
        id: 1,
        name: "Umair",
    });
});

app.listen(port, () => console.log(`Example app listening on port port!`))

