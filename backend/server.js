const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;


const app=express();
app.listen(port,()=>console.log(`server is started at port${port}`));


app.use('/api/goals',require('./routes/goalRoutes'));
