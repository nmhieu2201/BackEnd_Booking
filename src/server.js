const express = require('express');
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/web');
const dotenv = require('dotenv');
const connectDb = require('./config/connectdb')
const app = express();
dotenv.config();
connectDb();
const port = process.env.PORT || 8080;
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
app.listen(port, () => {
    `Listen on ${port}`;
});
