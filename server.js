const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
res.sendFile('./index.html', {root: './src/'})
})

app.listen(8080, () => console.log(`Server running on port ${PORT}`))
