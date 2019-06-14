import express from 'express'
import middlewares from './middlewares'

// Create Express server
const app = express()
const port = process.env.PORT || '4000'

app.set('port', port)

middlewares(app)

export default app
