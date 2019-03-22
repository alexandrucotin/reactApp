import React from "react";

import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Box from "react-bulma-components/lib/components/box";
import Heading from "react-bulma-components/lib/components/heading";

class Pet extends React.Component {
	render() {
		const { name, animal, breed, media, location } = this.props;

		let photos = [];

		if (media && media.photos && media.photos.photo) {
			photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
		}
		return (
			<Columns.Column narrow size="one-quarter">
				<Box>
					<div>
						<img src={photos[0].value} alt={name} />
					</div>
					<div>
						<Heading size={4}>{name.toUpperCase()}</Heading>
						<p> Animal: {animal} </p>
						<p> Breed: {breed} </p>
						<p> Location: {location} </p>
						<button className="button is-primary" type="button">
							Show More
						</button>
					</div>
				</Box>
			</Columns.Column>
		);
	}
}
export default Pet;
