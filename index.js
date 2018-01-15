import express from 'express'
import bodyParser from 'body-parser'
import router from './routes.js'
import connection from './connection'

const app  = new express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use('/api', router); 
app.listen(8000, () => {
  console.log('We are live on 8000');
});