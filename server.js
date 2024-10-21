import {createServer} from 'node:http'

const server = createServer((req, res) =>{
    console.log('oi');

    return res.end()
    
})

server.listen(3002)