const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.sportsPath = '/api/sports';
        this.arenasPath = '/api/arenas';
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
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
        this.app.use(this.sportsPath, require('../routes/sport.routes'));
        this.app.use(this.arenasPath, require('../routes/arena.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port', this.port);
        });
    }

}

module.exports = Server;