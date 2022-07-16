// CommonJs
const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

// example route
fastify.get('/daybreak', function (request, reply) {
    reply.send({ 'daybreak': 'hello world' })
})

// Run the server!
fastify.listen({ port: 3360 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})