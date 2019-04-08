import React from "react";
import pf from "petfinder-client";
import Heading from "react-bulma-components/lib/components/heading";
import { navigate } from "@reach/router";
import Box from "react-bulma-components/lib/components/box";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(", ");
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city}, ${
            data.petfinder.pet.contact.state
          }`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1> Loading.. </h1>;
    }
    const { name, animal, breed, location, description } = this.state;

    return (
      <Box>
        <div>
          <Heading size={4}>{name}</Heading>
          <p> Animal: {animal} </p>
          <p> Breed: {breed} </p>
          <p> Location: {location} </p>
          <p> {description} </p>
        </div>
      </Box>
    );
  }
}

export default Details;
