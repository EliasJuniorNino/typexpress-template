import * as knex from 'knex'

import configuration from '../../knexfile'

const environment = process.env.environment || 'production'

const connection = knex(configuration[environment])

export default connection