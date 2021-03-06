const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const startMsg = 'Node JS server is running on port ' + port

app.get('/', (req, res) => {
    console.log('API sucessfully called')
    res.send(startMsg)
})

app.listen(port, () => {
    console.log('Node JS server is running on port ' + port)
})