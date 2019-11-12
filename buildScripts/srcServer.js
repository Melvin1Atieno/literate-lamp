// express configuration
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.js';

// port to be used. Change to whatever is available on your machine
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
 noInfo: true,
 publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName":"Bob","lastName": "Smith","email":"bob@gmail.com"},
    {"id":2, "firstName":"Terry","lastName": "anne","email":"terry@gmail.com"},
    {"id":3, "firstName":"Tristan","lastName": "Lee","email":"lee@gmail.com"}
  ])
});

app.listen(port, function(err){
  if(err){
    console.log(err)

  }else{
    open('http://localhost:'+ port);
  }
})
