const express = require('express');
const cors = require('cors');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //FORMATO DE LOS DATOS - JSON
        this.app.use(express.json());
        //DIRECTORIO PARA LOS ARCHIVOS ESTÁTICOS
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port', this.port);
        });
    }

}

module.exports = Server;