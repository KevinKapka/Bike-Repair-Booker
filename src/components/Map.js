import React, { useState, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 29.760427,
    longitude: -95.369804,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  return (
    <div style={styles.container}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoidHJ0aW5jaGVyIiwiYSI6ImNrYzIzbmYzczA4emszMm81dXExODlmbHMifQ.ck6na7AaOXJKl3xfNfOXEQ"
        }
        mapStyle="mapbox://styles/trtincher/ckc3sob4r00rd1ipi2cpy5qgr"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {/* {dataContext.visited.map((brewery, i) => (
          <Marker
            key={i}
            latitude={
              brewery.latitude === null ? 0 : parseInt(brewery.latitude)
            }
            longitude={
              brewery.longitude === null ? 0 : parseInt(brewery.longitude)
            }
          >
            <i class="fas fa-check-circle" />
          </Marker>
        ))} */}
      </ReactMapGL>
    </div>
  );
}

const styles = {
  container: {
    width: 500,
    height: 500,
    margin: "auto",
  },
};

export default Map;
