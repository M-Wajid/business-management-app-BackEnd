const express = require('express');

const designRouter = require('./routes/designRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const projectRouter = require('./routes/projectRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const subscriberRouter = require ('./routes/subscriberRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
  console.log("HTTP METHOD - " + req.method + " , URL - " + req.url);
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
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriber', subscriberRouter);

module.exports = app;
