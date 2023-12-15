import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app: app});

    app.use((req, res) =>{
        res.send('hello from express apollo server');
    });

    app.listen(4000, ()=> console.log('server is running on port 4000'));
}

startServer();