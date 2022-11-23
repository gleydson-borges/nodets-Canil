import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//Configurando Enginer
server.set('view engine','mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configurando pasta pública
server.use(express.static(path.join(__dirname, '../public ')))

//Configurando Rotas
server.use(mainRoutes);

//Rota 404
server.use((req, res)=>{
    res.send('Ops! Página não encontrada')
})

server.listen(process.env.PORT)