require('dotenv').config()

import App from './app'

import * as bodyParser from 'body-parser'
import defaultMiddleware from './middleware/DefaultMiddleware'

import DefaultController from './controllers/DefaultController'

const app = new App({
	port: Number(process.env.PORT) || 3333,
	controllers: [
		new DefaultController()
	],
	middleWares: [
		bodyParser.json(),
		bodyParser.urlencoded({ extended: true }),
		defaultMiddleware
	]
})

app.listen()