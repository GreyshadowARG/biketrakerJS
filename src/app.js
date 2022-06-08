// se configura la app
import express from 'express';
import {create} from 'express-handlebars';
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

// le decimos a la app donde van a estar las vistas
app.set('views', path.join(__dirname, 'views'));

// config directorios y formato de handlebars
const exphbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  });

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


// Rutas
app.use(indexRoutes);0

// Static files
app.use(express.static(path.join(__dirname, "public")))

export default app;