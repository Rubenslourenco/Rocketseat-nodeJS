/*import {createServer} from 'node:http'

const server = createServer((req, res) =>{
res.write("Hello world")


    return res.end()
    
})

server.listen(3002)
*/

import { fastify } from "fastify";
import {DatabaseMemory} from './database-memory.js'

const database =  new DatabaseMemory()

const server = fastify()

server.post('/videos', (req, reply) => {
   database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 180,
   })

    console.log(database.list());

    return reply.status(201).send()
    
})

server.get('/video', () => {
    return 'Hello Rocketseat'
})

server.put('/video:id', () => {
    return 'Hello Node'
})

server.listen({
    port: 3333
})