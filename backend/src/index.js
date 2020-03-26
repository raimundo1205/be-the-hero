const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 *Tipos de parâmetros: 
 * 
 * Query Params: Parâmetros nomeados enviados na rota após a "?" no URL (filtros, paginação).
 *   -> Ex: localhost:3333/users?name=diego
 * 
 * Route Params: Parâmetros utilizados para identificar recursos. 
 *  -> Buscar usuarios com id = 1.
 *      -> Ex: Navegador==> localhost:3333/users/1  | no backend ==> app.get('/users/:id',(request, response)[...]
 * Request Body: Corpo da requisição ultilizado para criar ou alterar recursos.
 */

 /**
  * Driver: SELECT * FROM users
  * Querry Builder: table('users').select('*').where() -> ferramenta KNEX
  */

