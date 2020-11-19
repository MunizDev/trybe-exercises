import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://cdn.bulbagarden.net/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png"
          alt="about"
        />
        <p>
          The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia)
          is a digital encyclopedia created by Professor Oak as an invaluable
          tool to Trainers in the Pokémon world. It gives information about all
          Pokémon in the world that are contained in its database, although it
          differs in how it acquires and presents information over the different
          media.
        </p>
      </div>
    );
  }
}

export default About;
