import React from "react";

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';


const Pet = props => {
    return (
   		<Columns.Column narrow size="one-third">
			<Box>			
				<Heading size={4}>{props.name.toUpperCase()}</Heading>
				<p> Animal: {props.animal} </p>
				<p> Breed: {props.breed} </p>
				<button className="button is-primary" type="button">Show More</button>
        	</Box>
        </Columns.Column>
    );
};
export default Footer;