const colors = require("colors");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const connection = require("./config/db");
const schema = require("./schema/schema");


const app = express();

// Connection to database
connection()

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === "development",
	})
);

app.listen(port, console.log(`Server listening on port ${port}`));
