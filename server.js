import Fastify from 'fastify'
import env from 'dotenv'
import animeRoutes from './routes/anime-routes.js'
env.config()

const fastify = Fastify({
    logger: true
})

fastify.register(animeRoutes)

const port = process.env.PORT
fastify.listen({
    port: port,
    host: '0.0.0.0'
})