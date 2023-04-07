import express from 'express'

const app = express()

app.get('/', ((req,res)=> {
    res.send('holiii')
}))


app.listen(3000)
console.log('Listen on port 3000')