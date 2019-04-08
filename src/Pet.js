import React from "react";
import { Link } from "@reach/router";

import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";
import Box from "react-bulma-components/lib/components/box";
import Heading from "react-bulma-components/lib/components/heading";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    let hero = "http://placecorgi.com/300/300";
    if (photos[0] && photos[0].value) {
      hero = photos[0].value;
    }

    return (
      <Columns.Column narrow size="one-quarter">
        <Box>
          <div>
            <img src={hero} alt={name} />
          </div>
          <div>
            <Heading size={4}>{name.toUpperCase()}</Heading>
            <p> Animal: {animal} </p>
            <p> Breed: {breed} </p>
            <p> Location: {location} </p>
            <Link to={`/details/${id}`}>
              <Button className="button is-primary" type="button">
                Show More
              </Button>
            </Link>
          </div>
        </Box>
      </Columns.Column>
    );
  }
}
export default Pet;
