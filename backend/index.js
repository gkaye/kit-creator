require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
});

server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
        // eslint-disable-next-line no-undef
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});

app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`);
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});