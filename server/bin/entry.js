const app = require('../init/app.js')
const loader = require('../init/loader.js')

const middlewares = ['errors', 'favicon', 'router']

middlewares.forEach(item => loader.register(item))

loader.init(app)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Server is running at %d', port)
})