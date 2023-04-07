import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3977

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req,res)=> {
    res.send('holiii')
})


app.listen(PORT)
console.log('Listen on port 3000')