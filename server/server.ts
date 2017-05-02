import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import routes from "./routes/routes";

export class Server {
    private server: any;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        let app = express();

        // get port
        let port = this.normalizePort(process.env.PORT || 3000);

        // create server
        this.server = this.createServer(app, port);

        // setup app
        this.setupApp(app, port);

        // setup routes
        this.setupRoutes(app);
    }

    private createServer(app: express.Application, port: any) {
        let server = http.createServer(app);
        server.listen(port);
        server.on('error', (err) => this.onError(err, port));
        server.on('listening', () => this.onListening(port));
        return server;
    }

    private setupApp(app: express.Application, port: any) {
        // set app port
        app.set('port', port);

        // mount json form parser
        app.use(bodyParser.json());

        // mount query string parser
        app.use(bodyParser.urlencoded({extended: true}));
    }

    private setupRoutes(app: express.Application) {
        // host static files
        app.use(express.static(__dirname));

        // use router middleware
        app.use(express.Router());

        // link main route module to app
        app.use('/', routes);

        // for all routes not handled by the routes above, send 404 - Not found
        app.use((req: Request, res: Response) => {
            res.status(404)
                .send('Not found');
        });
    }

    private normalizePort(val: any) {
        let port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }

    private onError(error: any, port: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        let address = this.resolveFullAddress(port);

        // handle specific errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(address + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(address + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private onListening(port: any) {
        let address = this.resolveFullAddress(port);
        console.log('Blueprint app listening on ' + address + '!');
    }

    private resolveFullAddress(port: any) {
        return typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;
    }
}

// bootstrap a new server
Server.bootstrap();