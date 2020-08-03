import React, { useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Grid from "@material-ui/core/Grid";
import "./app.css";
import CreateMarker from "../CreateMarker";

const markerTemplate = {
  location: [],
  option: { color: "red" },
};

function App() {
  const [polygon, setPolygon] = useState({
    location: [],
    option: { strokeColor: "blue", strokeThickness: 3 },
  });
  const [pins, setPins] = useState([]);

  const handleAddLocation = (newLocation) => {
    const { latitude, longitude } = newLocation;
    const loc = [+latitude, +longitude];
    if (polygon.location.length > 0) {
      const polygonLocations = [...polygon.location];
      polygonLocations.splice(polygonLocations.length - 1, 0, loc);
      setPolygon({
        ...polygon,
        location: polygonLocations,
      });
    } else {
      const newLocations = [];
      newLocations.push(loc);
      newLocations.push(loc);
      setPolygon({
        ...polygon,
        location: newLocations,
      });
    }

    setPins([
      ...pins,
      {
        ...markerTemplate,
        location: loc,
      },
    ]);
  };

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={2}>
        <CreateMarker addNewLocation={handleAddLocation} />
      </Grid>
      <Grid item xs={10} className="map">
        <ReactBingmaps
          bingmapKey="ArkIuxZ53TqeTinwyLDb2274xuZ7kBYqhue_LmHn9BDQ09uqTRbIMkUZo92Ba8rm"
          polyline={polygon}
          pushPins={pins}
          center={[13.0827, 80.2707]}
          id="map"
        ></ReactBingmaps>
      </Grid>
    </Grid>
  );
}

export default App;
