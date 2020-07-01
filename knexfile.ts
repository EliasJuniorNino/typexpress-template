require('ts-node/register')

export default {
	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			database: 'database'
		},
		migrations: {
			directory: './src/database/migrations'
		}
	},
	staging: {
		client: 'mysql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host: process.env.DB_HOST || '127.0.0.1',
			user: process.env.DB_USER,
			database: process.env.DB_DATABASE,
			password: process.env.DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};