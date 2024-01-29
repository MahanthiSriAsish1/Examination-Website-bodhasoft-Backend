const express = require('express')
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./Routes/routes')
const dbConnect = require('./db_connect/db_connect')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const dbName = 'QuestionPaper'

const connectToDb = async (dbName) => {
    try {
        await dbConnect(dbName);
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

connectToDb(dbName)
app.use('/api', routes);


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 