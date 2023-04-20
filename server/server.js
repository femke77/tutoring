const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  dataSources: () => {
    return {
      	//payPalAPI: new payPalAPI(),
    }
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(
        `introspection: http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
