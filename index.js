const express = require('express');
const routes = require('./routes/myroutes')
const routes2=require('./routes/myroutes2');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/angular",routes)
app.use("/member",routes2)
app.listen(PORT , ()=>{
    console.log("Server is running at port "+PORT)
})