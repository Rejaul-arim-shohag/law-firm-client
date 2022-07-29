require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hi Mom....I am running")
  })
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})