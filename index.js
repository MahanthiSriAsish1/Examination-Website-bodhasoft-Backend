const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 3001;


app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));    
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 