const express = require('express')
const app = express()

const port = 4000

const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const mongoose = require('mongoose')
require('dotenv').config();
const DBUrl = process.env.DB_CONNECT
//Connection to the database
mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDb Connected😱'))
.catch((e)=> console.log('error', e))

//Setting  GraphQL Connection
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true, 
    rootValue: resolvers
}))

app.get('/', (req, res)=>{
    res.send('Welcome');
} )

app.listen(port, ()=> {
    console.log(`App running on ${port}💪`);
})