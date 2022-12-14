const express = require('express');

const designRouter = require('./routes/designRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const projectRouter = require('./routes/projectRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
  console.log('Hello from the middleware ');
  next();
});

app.use((req, res, next)=>{
  req.requestTime = new Date().toISOString();
  next();
})

app.use('/api/v1/designs',designRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/projects',projectRouter);
app.use('/api/v1/services',serviceRouter);
module.exports = app;
