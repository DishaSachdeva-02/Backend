const express = require('express');
const routes = require('./routes/myroutes')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/angular",routes)
app.listen(PORT , ()=>{
    console.log("Server is running at port "+PORT)
})