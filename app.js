const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

// app.get('/', function(req, res){
//     res.send('yooo')
// })
app.use(router)


app.listen(port, function(){
    console.log(`app run on port: ${port}`);
})