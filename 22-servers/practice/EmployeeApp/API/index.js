const express = require('express');
const db = require('./queries.js');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>res.json({info:'API'}));
app.get('/employees',db.getEmployees);
app.get('/employee',db.getEmployee);
app.put('/employees',db.updateEmployee);
app.post('/employees',db.addEmployee);
app.delete('/employee/:id',db.deleteEmployee);

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
});