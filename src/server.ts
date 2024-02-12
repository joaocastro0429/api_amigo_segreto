import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import http from 'http'
import https from 'https'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// development server

const runServer = (port: number, server: http.Server) => {
    server.listen(port, () => {
        console.log(`running server ${port}`)
    })


    const regularSever = http.createServer(app)
    if (process.env.PORT === 'prodution') {
        // TODO:Configurar o ssl 
        //TODO:rodar server na 80 e na porta 443

    } else {
        const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000
        runServer(serverPort, regularSever)
    }
}
