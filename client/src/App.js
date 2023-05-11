import HeaderBS from "./components/HeaderBS";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ContactBS from "./components/ContactBS";
import Terms from "./components/Terms";
import NoMatch from "./components/NoMatch";
import Blog from "./components/Blog";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <ResponsiveDrawer />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactBS />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NoMatch />} />
          </Routes> */}
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
