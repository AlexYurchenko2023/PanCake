const app = require ('./app')

const port = process.env.PORT || 3000

// создаем PORT 3000 и функцию с ответом от сервера
 app.listen (port, function () {
    console.log (`Server has been started on ${port} port`)
 })
