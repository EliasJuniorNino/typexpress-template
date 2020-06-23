import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './Middleware/Logger'

import DefaultController from './Controllers/DefaultController'

const app = new App({
	port: 3333,
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