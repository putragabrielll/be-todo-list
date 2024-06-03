require('dotenv').config({
    path: './.env'
})

const exprees = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = exprees()

app.use(exprees.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Backend is running well!'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

module.exports = app