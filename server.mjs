
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Learning Server Side Javascript', new Date())
  res.send('Learning Server Side Javascript' + ' ' + new Date().toDateString())
})

app.get('/profile', (req, res) => {
  console.log('Learning Server Side Javascript', new Date())
  res.send('this is profile page' + ' ' + new Date().toDateString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})