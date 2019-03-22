import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Heading from "react-bulma-components/lib/components/heading";
import Details from "./Details";

class App extends React.Component {
	render() {
		return (
			<div>
				<Heading size={4}> Homepage </Heading>
				<Router>
					<Results path="/" />
					<Details path="/details/:id" />
				</Router>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
