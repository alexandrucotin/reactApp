import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import Heading from "react-bulma-components/lib/components/heading";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <Heading size={4}>
          {" "}
          <Link to="/">Homepage </Link>{" "}
        </Heading>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
