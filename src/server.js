//const http = require('http');
const express = require('express');
const compression = require('compression');
require('dotenv').config();

const app = express();

//app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted`)));
//app.use(favicon(`${__dirname}/../assets/balloon.png`));
app.use(compression());

app.use(session({
    key: 'sessionid',
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    },
}));

router(app);

app.listen(config.connections.http.port, (err) => {
  if (err) { throw err; }
  console.log(`Listening on port ${config.connections.http.port}`);
});

//const port = process.env.PORT || process.env.NODE_PORT || 3000;
//
//// start server
//http.createServer(onRequest).listen(port, () => {
//  console.log(`Listening on 127.0.0.1: ${port}`);
//});