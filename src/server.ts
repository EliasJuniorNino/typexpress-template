require('dotenv').config()

import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/Logger'

import DefaultController from './controllers/DefaultController'

const app = new App({
	port: Number(process.env.PORT) || 3333,
	controllers: [
		new DefaultController()
	],
	middleWares: [
		bodyParser.json(),
		bodyParser.urlencoded({ extended: true }),
		loggerMiddleware
	]
})

app.listen()