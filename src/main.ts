import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send('hello world!')
})

app.listen(3000)
