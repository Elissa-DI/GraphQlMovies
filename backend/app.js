const express = require('express')
const app = express()

const port = 4000

const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const mongoose = require('mongoose')
//Connection to the database
mongoose.connect('mongodb+srv://elissafirstborn:asdFGHJkloiuytreed@cluster0.dzq3tep.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDb Connected😱'))
.catch((e)=> console.log('error', e))

const schema = buildSchema(`
  type Query {
    name: String
  }
`)

const rootValue = {
    name: () => {
        return 'John Wick Parabellum'
    }
}

//Setting  GraphQL Connection
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue
}))

app.get('/', (req, res)=>{
    res.send('Welcome');
} )

app.listen(port, ()=> {
    console.log(`App running on ${port}💪`);
})