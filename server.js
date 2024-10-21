/*import {createServer} from 'node:http'

const server = createServer((req, res) =>{
res.write("Hello world")


    return res.end()
    
})

server.listen(3002)
*/

import { fastify } from "fastify";

const server = fastify()

server.get('/', () => {
    return 'Hello world'
})

server.get('/hello', () => {
    return 'Hello Rocketseat'
})

server.get('/node', () => {
    return 'Hello Node'
})

server.listen({
    port: 3333
})