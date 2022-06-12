
import Fastify from 'fastify'
import dbConnector from './src/config/our-db-connector'
import firstRoute from '.src/routes//firstRoute' ;

const fastify = Fastify() ;
fastify.register(dbConnector)
fastify.register(firstRoute)



fastify.listen(3005);
