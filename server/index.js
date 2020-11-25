const express = require('express')
const app = express()
const messagesCtrl = require('./controllers/messages_controller')
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesUrl = '/api/messages'

app.post(messagesUrl, messagesCtrl.create)
app.get(messagesUrl, messagesCtrl.read)
app.put(`${messagesUrl}/:id`, messagesCtrl.update)
app.delete(`${messagesUrl}/:id`, messagesCtrl.delete)





app.listen(3001, () => console.log('Im running on port 3001'))