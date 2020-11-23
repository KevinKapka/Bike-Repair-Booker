import React from "react";
import Geocode from "react-geocode";

const GECODE_KEY = process.env.REACT_APP_GOOGLE_GEOCODE_KEY;


export function geolocator(input, coordinates, setCoordinates) {
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey(GECODE_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion("es");

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();

  // Get address from latitude & longitude.
  // Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //   response => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );

  let address = `${input.address1}, ${input.city}, ${input.state} ${input.zip}`;

  // Get latitude & longitude from address.
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      // console.log(lat, lng);
      let tempCoordinates = { ...coordinates };
      tempCoordinates.end = { lat, lng };
      setCoordinates(tempCoordinates);
    },
    (error) => {
      console.error(error);
    }
  );
}
